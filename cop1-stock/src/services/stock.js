// ==================================================================================
// SERVICE GESTION STOCK (avec Toasts et Realtime) - VERSION NPM
// ==================================================================================

import { supabaseClient, setupRealtimeSubscription, cleanupRealtimeSubscription } from './supabase.js';
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

// ==================================================================================
// REALTIME - GESTION DES MISES À JOUR EN TEMPS RÉEL
// ==================================================================================

/**
 * Initialise l'écoute Realtime pour les mises à jour du stock et de l'historique
 * À appeler après la connexion utilisateur
 */
export function initRealtimeStock() {
    setupRealtimeSubscription(
        handleRealtimeInsert,
        handleRealtimeUpdate,
        handleRealtimeDelete,
        handleRealtimeHistoryInsert // Nouveau: écoute aussi l'historique
    );
}

/**
 * Arrête l'écoute Realtime
 * À appeler lors de la déconnexion
 */
export function stopRealtimeStock() {
    cleanupRealtimeSubscription();
}

/**
 * Gère l'insertion d'un nouvel item en temps réel
 */
function handleRealtimeInsert(payload) {
    const newItem = payload.new;
    if (!newItem) return;

    // Vérifie si l'item n'existe pas déjà (évite les doublons)
    const exists = state.items.find(i => i.id === newItem.id);
    if (exists) return;

    // Ajoute l'item et trie la liste
    state.items.push(newItem);
    state.items.sort((a, b) => a.name.localeCompare(b.name));

    // Rafraîchit l'affichage
    refreshStockView();
    console.log(`📦 Nouveau produit ajouté: ${newItem.name}`);
}

/**
 * Gère la mise à jour d'un item en temps réel
 */
function handleRealtimeUpdate(payload) {
    const updatedItem = payload.new;
    if (!updatedItem) return;

    // Trouve et met à jour l'item dans le state
    const index = state.items.findIndex(i => i.id === updatedItem.id);
    if (index !== -1) {
        const oldQty = state.items[index].quantity;
        state.items[index] = updatedItem;

        // Affiche une notification discrète si la quantité a changé
        if (oldQty !== updatedItem.quantity) {
            const diff = updatedItem.quantity - oldQty;
            console.log(`📦 Stock mis à jour: ${updatedItem.name} (${diff > 0 ? '+' : ''}${diff})`);
        }

        // Rafraîchit l'affichage
        refreshStockView();
    }
}

/**
 * Gère la suppression d'un item en temps réel
 */
function handleRealtimeDelete(payload) {
    const deletedItem = payload.old;
    if (!deletedItem) return;

    // Supprime l'item du state
    const index = state.items.findIndex(i => i.id === deletedItem.id);
    if (index !== -1) {
        state.items.splice(index, 1);
        console.log(`🗑️ Produit supprimé: ${deletedItem.name}`);

        // Rafraîchit l'affichage
        refreshStockView();
    }
}

/**
 * Rafraîchit la vue de manière intelligente et non-intrusive
 * - Ne rafraîchit PAS si une modale est ouverte (évite de perdre le travail en cours)
 * - Met à jour uniquement les compteurs si possible (évite les sauts visuels)
 * - Debounce pour éviter les rafraîchissements multiples
 */
function refreshStockView() {
    // ⚠️ NE PAS rafraîchir si l'utilisateur a une modale ouverte
    if (state.modalOpen || state.quickAddModalOpen || state.settingsModalOpen) {
        console.log('📡 Realtime: Mise à jour différée (modale ouverte)');
        // Stocker le fait qu'une mise à jour est en attente
        window._realtimePendingRefresh = true;
        return;
    }

    // ⚠️ NE PAS rafraîchir si l'utilisateur est en train d'interagir (focus sur un input)
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'SELECT')) {
        console.log('📡 Realtime: Mise à jour différée (utilisateur en saisie)');
        window._realtimePendingRefresh = true;
        return;
    }

    // Utilise un debounce pour éviter les rafraîchissements multiples rapides
    if (window._realtimeRefreshTimeout) {
        clearTimeout(window._realtimeRefreshTimeout);
    }

    window._realtimeRefreshTimeout = setTimeout(() => {
        // Mise à jour intelligente selon la vue
        if (state.view === 'list') {
            updateStockCountersOnly();
        } else if (state.view === 'history') {
            // Pour l'historique, on recharge les données en arrière-plan
            reloadHistoryData();
        }
        // Pour les opérations, on ne fait rien (les données seront à jour au prochain accès)

        window._realtimePendingRefresh = false;
    }, 300); // 300ms de debounce pour plus de stabilité
}

/**
 * Met à jour uniquement les compteurs dans la vue stock (sans re-render complet)
 * Évite les "sauts" visuels désagréables
 */
function updateStockCountersOnly() {
    // Recalcule les totaux
    const alim = state.items.filter(i => i.category === 'ALIMENTAIRE').reduce((a, b) => a + b.quantity, 0);
    const hyg = state.items.filter(i => i.category === 'HYGIENE').reduce((a, b) => a + b.quantity, 0);
    const vet = state.items.filter(i => i.category === 'VETEMENTS').reduce((a, b) => a + b.quantity, 0);
    const total = alim + hyg + vet;

    // Met à jour les compteurs dans le DOM si ils existent
    const counterEls = document.querySelectorAll('[data-stat-category]');
    if (counterEls.length > 0) {
        // On a les data attributes, on peut faire une mise à jour ciblée
        counterEls.forEach(el => {
            const cat = el.dataset.statCategory;
            if (cat === 'alimentaire') el.textContent = alim;
            else if (cat === 'hygiene') el.textContent = hyg;
            else if (cat === 'vetements') el.textContent = vet;
            else if (cat === 'total') el.textContent = total;
        });
    }

    // Si les data attributes n'existent pas ou si les données ont vraiment changé,
    // faire un refresh complet mais SEULEMENT de la liste des produits
    const container = document.getElementById('stock-results-container');
    if (container) {
        import('../modules/stock/stock.view.js').then(({ getStockListHTML }) => {
            container.innerHTML = getStockListHTML();
            import('lucide').then(({ createIcons, icons }) => {
                createIcons({ icons });
            });
        });
    }

    console.log('📡 Realtime: Vue stock mise à jour silencieusement');
}

/**
 * Recharge les données de l'historique en arrière-plan
 */
async function reloadHistoryData() {
    try {
        const { data: history } = await supabaseClient.from('history').select('*').order('created_at', { ascending: false }).limit(500);
        if (history) {
            state.history = history;
            const { processHistoryGroups } = await import('./history.js');
            processHistoryGroups(history);

            // Rafraîchit la vue historique si on y est toujours
            if (state.view === 'history' && !state.modalOpen) {
                const { renderHist } = await import('../modules/history/history.view.js');
                const slot = document.getElementById('main-slot');
                if (slot) {
                    renderHist(slot);
                    console.log('📡 Realtime: Historique mis à jour');
                }
            }
        }
    } catch (err) {
        console.error('Erreur rechargement historique:', err);
    }
}

/**
 * Gère l'insertion d'une nouvelle entrée d'historique en temps réel
 */
function handleRealtimeHistoryInsert(payload) {
    const newEntry = payload.new;
    if (!newEntry) return;

    // Ajoute l'entrée au début de l'historique (les plus récents en premier)
    state.history.unshift(newEntry);

    // Limite à 500 entrées
    if (state.history.length > 500) {
        state.history = state.history.slice(0, 500);
    }

    // Retraite les groupes
    import('./history.js').then(({ processHistoryGroups }) => {
        processHistoryGroups(state.history);
    });

    // Rafraîchit si on est sur la vue historique (avec les mêmes protections)
    if (state.view === 'history' && !state.modalOpen && !state.quickAddModalOpen && !state.settingsModalOpen) {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
            console.log('📡 Realtime: Historique différé (utilisateur en saisie)');
            return;
        }

        // Debounce pour éviter les mises à jour multiples rapides
        if (window._historyRefreshTimeout) {
            clearTimeout(window._historyRefreshTimeout);
        }
        window._historyRefreshTimeout = setTimeout(async () => {
            // Mise à jour DOUCE: seulement le conteneur des résultats avec transition
            const container = document.getElementById('history-results-container');
            if (container && state.view === 'history') {
                // Applique une transition douce
                container.style.transition = 'opacity 0.15s ease';
                container.style.opacity = '0.5';

                setTimeout(async () => {
                    const { getHistoryListHTML } = await import('../modules/history/history.view.js');
                    const { createIcons, icons } = await import('lucide');

                    container.innerHTML = getHistoryListHTML();
                    createIcons({ icons });

                    container.style.opacity = '1';
                    console.log('📡 Realtime: Historique mis à jour silencieusement');
                }, 150);
            }
        }, 800); // 800ms de debounce pour l'historique (plus stable)
    }
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
            // Récupération de l'ancien item pour comparaison
            const originalItem = state.items.find(i => i.id === item.id);

            const { error } = await supabaseClient.from('items').update(payload).eq('id', item.id);
            if (error) throw error;

            // GESTION SYNCHRONISATION NOM / LISTES
            // Si le nom ou la catégorie a changé, on met à jour les listes de suggestions
            if (originalItem && (originalItem.name !== cleanName || originalItem.category !== item.mainCategory)) {
                try {
                    // 1. Identifier l'ancienne liste
                    let oldListKey;
                    if (originalItem.category === 'ALIMENTAIRE') oldListKey = 'foodProducts';
                    else if (originalItem.category === 'HYGIENE') oldListKey = 'hygieneProducts';
                    else oldListKey = 'clothingProducts';

                    // 2. Identifier la nouvelle liste
                    let newListKey;
                    if (item.mainCategory === 'ALIMENTAIRE') newListKey = 'foodProducts';
                    else if (item.mainCategory === 'HYGIENE') newListKey = 'hygieneProducts';
                    else newListKey = 'clothingProducts';

                    // 3. Retirer l'ancien nom de l'ancienne liste
                    const oldList = state[oldListKey];
                    if (oldList && oldList.includes(originalItem.name)) {
                        state[oldListKey] = oldList.filter(n => n !== originalItem.name);
                        await supabaseClient.from('settings').upsert({ key: oldListKey, value: state[oldListKey] });
                    }

                    // 4. Ajouter le nouveau nom à la nouvelle liste (si pas déjà présent)
                    const newList = state[newListKey];
                    if (newList && !newList.includes(cleanName)) {
                        newList.push(cleanName);
                        newList.sort();
                        await supabaseClient.from('settings').upsert({ key: newListKey, value: newList });
                    }

                    console.log(`🔄 Synchro: "${originalItem.name}" -> "${cleanName}" dans les listes`);
                } catch (syncErr) {
                    console.warn("Erreur synchro listes:", syncErr);
                    // On ne bloque pas la sauvegarde pour ça, c'est du "bonus"
                }
            }

            const diff = qty - (originalItem?.quantity || 0);
            if (diff !== 0) await logHistory(cleanName, diff > 0 ? "Correction (+)" : "Correction (-)", diff);

            showToast(`"${cleanName}" mis à jour ✓`, "success");
        } else {
            // Vérification doublon
            const existing = state.items.find(i => i.name.toLowerCase() === cleanName.toLowerCase() && i.category === item.mainCategory && i.sub_category === item.subCategory);
            if (existing) {
                showToast(`Le produit "${cleanName}" existe déjà !`, "error");
                return;
            }

            // VÉRIFICATION EXISTENCE DANS LES PARAMÈTRES (NOUVEAU)
            let listKey;
            if (item.mainCategory === 'ALIMENTAIRE') listKey = 'foodProducts';
            else if (item.mainCategory === 'HYGIENE') listKey = 'hygieneProducts';
            else listKey = 'clothingProducts';

            const currentList = state[listKey];
            const existsInSettings = currentList.some(n => n.toLowerCase() === cleanName.toLowerCase());

            if (!existsInSettings) {
                showToast(`Ce produit n'existe pas dans les paramètres. Veuillez l'ajouter dans Paramètres > Listes.`, "error");
                return;
            }

            const { error } = await supabaseClient.from('items').insert([payload]);
            if (error) throw error;
            await logHistory(cleanName, "Création", qty);

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
