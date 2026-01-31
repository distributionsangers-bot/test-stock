// ==================================================================================
// SERVICE GESTION STOCK (avec Toasts) - VERSION NPM
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';
import { logHistory } from './history.js';
import { showToast, showConfirm } from './utils.js';

export async function loadData() {
    const { data: items } = await supabaseClient.from('items').select('*');
    if (items) state.items = items.sort((a, b) => a.name.localeCompare(b.name));

    const { data: history } = await supabaseClient.from('history').select('*').order('created_at', { ascending: false }).limit(500);
    if (history) {
        state.history = history;
        const { processHistoryGroups } = await import('./history.js');
        processHistoryGroups(history);
    }

    const { renderApp } = await import('../modules/app.view.js');
    renderApp();
}

export async function saveQuickAdd() {
    const qty = Number(document.getElementById('quick-qty').value);
    if (!qty) {
        const { closeQuickAddModal } = await import('../modules/modals/item-modal.view.js');
        return closeQuickAddModal();
    }

    const item = state.quickAddItem;
    await supabaseClient.from('items').update({ quantity: Math.max(0, item.quantity + qty), updated_by: state.user.email }).eq('id', item.id);

    const actionLabel = qty > 0 ? "Ajout Rapide" : "Retrait Rapide";
    await supabaseClient.from('history').insert([{ item_name: item.name, action: actionLabel, change_qty: qty, user_email: state.user.email }]);

    await loadData();
    const { closeQuickAddModal } = await import('../modules/modals/item-modal.view.js');
    closeQuickAddModal();

    // Toast de confirmation
    showToast(`${qty > 0 ? '+' : ''}${qty} ${item.name}`, qty > 0 ? 'success' : 'warning');
}

export async function saveItem() {
    const item = state.editingItem || state.newItem;

    if (!item.name) {
        showToast("Veuillez saisir un nom de produit", "error");
        return;
    }

    const cleanName = item.name.trim();
    if (!item.subCategory) item.subCategory = 'Autre';
    const qty = Number(item.quantity) || 0;

    const payload = {
        name: cleanName,
        category: item.mainCategory,
        sub_category: item.subCategory,
        quantity: qty,
        threshold: Number(item.minThreshold),
        remarks: item.remarks || '',
        batches: item.batches || [],
        updated_by: state.user.email
    };

    try {
        if (state.editingItem) {
            const { error } = await supabaseClient.from('items').update(payload).eq('id', item.id);
            if (error) throw error;

            const diff = qty - (state.items.find(i => i.id === item.id)?.quantity || 0);
            if (diff !== 0) await logHistory(cleanName, diff > 0 ? "Correction (+)" : "Correction (-)", diff);

            showToast(`"${cleanName}" mis à jour ✓`, "success");
        } else {
            // Vérification doublon
            const existing = state.items.find(i => i.name.toLowerCase() === cleanName.toLowerCase() && i.category === item.mainCategory && i.sub_category === item.subCategory);
            if (existing) {
                showToast(`Le produit "${cleanName}" existe déjà !`, "error");
                return;
            }

            const { error } = await supabaseClient.from('items').insert([payload]);
            if (error) throw error;
            await logHistory(cleanName, "Création", qty);

            // Auto-Add suggestions
            let listKey;
            if (item.mainCategory === 'ALIMENTAIRE') listKey = 'foodProducts';
            else if (item.mainCategory === 'HYGIENE') listKey = 'hygieneProducts';
            else listKey = 'clothingProducts';
            const currentList = state[listKey];
            if (!currentList.includes(cleanName)) {
                currentList.push(cleanName);
                currentList.sort();
                await supabaseClient.from('settings').upsert({ key: listKey, value: currentList });
            }

            showToast(`"${cleanName}" créé avec succès !`, "success");
        }

        await loadData();
        const { closeModal } = await import('../modules/modals/item-modal.view.js');
        closeModal();

    } catch (err) {
        console.error(err);
        showToast("Erreur : " + err.message, "error");
    }
}

export async function deleteItem() {
    if (!state.editingItem) return;

    showConfirm(
        `Voulez-vous vraiment supprimer "${state.editingItem.name}" ?`,
        async () => {
            try {
                const { error } = await supabaseClient.from('items').delete().eq('id', state.editingItem.id);
                if (error) throw error;

                await logHistory(state.editingItem.name, "Suppression", -state.editingItem.quantity);

                showToast(`"${state.editingItem.name}" supprimé`, "warning");

                await loadData();
                const { closeModal } = await import('../modules/modals/item-modal.view.js');
                closeModal();

            } catch (err) {
                console.error(err);
                showToast("Erreur : " + err.message, "error");
            }
        },
        {
            title: "Supprimer ce produit ?",
            confirmText: "Supprimer",
            cancelText: "Annuler",
            type: "danger"
        }
    );
}

// Expose globalement
window.saveItem = saveItem;
window.deleteItem = deleteItem;
window.saveQuickAdd = saveQuickAdd;
