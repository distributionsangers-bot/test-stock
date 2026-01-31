// ==================================================================================
// SERVICE PARAMÈTRES (SETTINGS) - VERSION NPM
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';
import { showToast, showConfirm, showPrompt } from './utils.js';

export async function loadGlobalSettings() {
    try {
        const { data, error } = await supabaseClient.from('settings').select('*');
        if (data && data.length > 0) {
            data.forEach(row => {
                if (state[row.key] !== undefined) {
                    state[row.key] = row.value;
                }
            });
        }
    } catch (err) {
        console.error("Erreur chargement settings:", err);
    }
}

// --- GESTION DES SAUVEGARDES ---
export async function createBackup() {
    const defaultName = "Sauvegarde du " + new Date().toLocaleString();

    showPrompt("Donnez un nom à cette sauvegarde :", async (name) => {
        if (!name) return;

        try {
            const { error } = await supabaseClient.from('backups').insert([{
                name: name,
                data: state.items,
                created_at: new Date().toISOString()
            }]);

            if (error) throw error;

            showToast("Sauvegarde créée avec succès !", "success");

            const { renderSettingsModal } = await import('../modules/modals/settings-modal.view.js');
            renderSettingsModal();

        } catch (err) {
            console.error("Erreur lors de la sauvegarde :", err);
            showToast("Erreur technique : " + err.message, "error");
        }
    }, {
        defaultValue: defaultName,
        title: "Créer une sauvegarde",
        confirmText: "Sauvegarder"
    });
}

export async function restoreBackup(backupId) {
    showConfirm(
        "ATTENTION : Cela va ÉCRASER tout le stock actuel par la version sauvegardée. Êtes-vous sûr ?",
        async () => {
            try {
                // 1. Récupérer la sauvegarde
                const { data: backup } = await supabaseClient.from('backups').select('data').eq('id', backupId).single();
                if (!backup) {
                    showToast("Sauvegarde introuvable.", "error");
                    return;
                }

                const itemsToRestore = backup.data;

                // 2. Supprimer tout le stock actuel
                const { data: currentIds } = await supabaseClient.from('items').select('id');
                if (currentIds.length > 0) {
                    const ids = currentIds.map(i => i.id);
                    await supabaseClient.from('items').delete().in('id', ids);
                }

                // 3. Réinsérer les items sauvegardés
                const cleanItems = itemsToRestore.map(item => {
                    const { id, created_at, ...rest } = item;
                    return { ...rest, updated_by: state.user.email };
                });

                const { error: insertError } = await supabaseClient.from('items').insert(cleanItems);

                if (insertError) {
                    showToast("Erreur restauration : " + insertError.message, "error");
                } else {
                    showToast("Restauration terminée avec succès !", "success");

                    const { logHistory } = await import('./history.js');
                    await logHistory("SYSTÈME", "Restauration Sauvegarde", 0);

                    const { loadData } = await import('./stock.js');
                    await loadData();

                    const { closeSettingsModal } = await import('../modules/modals/settings-modal.view.js');
                    closeSettingsModal();
                }
            } catch (err) {
                console.error(err);
                showToast("Erreur : " + err.message, "error");
            }
        },
        {
            title: "Restaurer une sauvegarde ?",
            confirmText: "Restaurer",
            type: "danger"
        }
    );
}

export async function deleteBackup(id) {
    showConfirm(
        "Voulez-vous vraiment supprimer cette sauvegarde ?",
        async () => {
            try {
                await supabaseClient.from('backups').delete().eq('id', id);
                showToast("Sauvegarde supprimée", "success");
                const { renderSettingsModal } = await import('../modules/modals/settings-modal.view.js');
                renderSettingsModal();
            } catch (err) {
                showToast("Erreur : " + err.message, "error");
            }
        },
        { title: "Suppression", type: "danger" }
    );
}

// --- GESTION SETTINGS (Listes) ---
export async function addToSettingList(listName, value) {
    if (value && !state[listName].includes(value)) {
        state[listName].push(value);
        state[listName].sort();

        const { error } = await supabaseClient
            .from('settings')
            .upsert({ key: listName, value: state[listName] });

        if (error) {
            showToast("Erreur sauvegarde : " + error.message, "error");
            state[listName] = state[listName].filter(v => v !== value);
        } else {
            showToast("Ajouté avec succès", "success");
        }

        const { renderSettingsModal } = await import('../modules/modals/settings-modal.view.js');
        renderSettingsModal();
    }
}

export async function removeFromSettingList(listName, value) {
    showConfirm(
        `Supprimer "${value}" ? (Cela sera supprimé pour tout le monde)`,
        async () => {
            const oldList = [...state[listName]];
            state[listName] = state[listName].filter(v => v !== value);

            const { error } = await supabaseClient
                .from('settings')
                .upsert({ key: listName, value: state[listName] });

            if (error) {
                showToast("Erreur suppression : " + error.message, "error");
                state[listName] = oldList;
            } else {
                showToast("Supprimé avec succès", "success");
            }

            const { renderSettingsModal } = await import('../modules/modals/settings-modal.view.js');
            renderSettingsModal();
        },
        { title: "Suppression d'un élément", confirmText: "Supprimer", type: "danger" }
    );
}
