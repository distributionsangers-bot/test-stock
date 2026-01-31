// ==================================================================================
// VUE MODALE PARAMÈTRES - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../../core/state.js';
import { supabaseClient } from '../../services/supabase.js';
import { createBackup, restoreBackup, deleteBackup, addToSettingList, removeFromSettingList } from '../../services/settings.js';
import { createIcons, icons } from 'lucide';

// Expose globalement
window.createBackup = createBackup;
window.restoreBackup = restoreBackup;
window.deleteBackup = deleteBackup;
window.addToSettingList = addToSettingList;
window.removeFromSettingList = removeFromSettingList;
window.closeSettingsModal = closeSettingsModal;
window.openSettingsModal = openSettingsModal;

export function openSettingsModal() {
    state.settingsModalOpen = true;
    const url = new URL(window.location);
    url.searchParams.set('modal', 'settings');
    window.history.pushState({ view: state.view, modal: 'settings' }, '', url);
    renderSettingsModal();
}

export function closeSettingsModal() {
    const root = document.getElementById('settings-modal-root');
    const modal = root?.querySelector('.modal-content');
    const backdrop = root?.querySelector('.modal-backdrop');

    if (modal && backdrop) {
        modal.classList.add('animate-scale-out');
        backdrop.style.opacity = '0';
        backdrop.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            state.settingsModalOpen = false;
            renderSettingsModal();
            const url = new URL(window.location);
            url.searchParams.delete('modal');
            window.history.replaceState({ view: state.view }, '', url);
        }, 250);
    } else {
        state.settingsModalOpen = false;
        renderSettingsModal();
        const url = new URL(window.location);
        url.searchParams.delete('modal');
        window.history.replaceState({ view: state.view }, '', url);
    }
}

function renderSettingsSection(title, listName, placeholder) {
    const list = state[listName] || [];
    const safeListName = "'" + listName + "'";

    const itemsHTML = list.length === 0
        ? `<div class="text-xs text-slate-400 italic py-2">Aucun élément</div>`
        : list.map(item => `
            <div class="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg group hover:bg-slate-100 transition">
                <span class="text-sm font-medium text-slate-700">${item}</span>
                <button onclick="removeFromSettingList(${safeListName}, '${item.replace(/'/g, "\\'")}')" class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');

    return `
        <div class="mb-4">
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-bold text-slate-700">${title}</span>
                <span class="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">${list.length}</span>
            </div>
            <div class="space-y-1.5 mb-3 max-h-32 overflow-y-auto">${itemsHTML}</div>
            <div class="flex gap-2">
                <input type="text" id="input-${listName}" 
                    class="flex-1 px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition" 
                    placeholder="${placeholder}"
                    onkeypress="if(event.key==='Enter'){addToSettingList(${safeListName}, this.value); this.value='';}"
                >
                <button onclick="addToSettingList(${safeListName}, document.getElementById('input-${listName}').value); document.getElementById('input-${listName}').value='';" 
                    class="px-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition flex items-center justify-center">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;
}

export async function renderSettingsModal() {
    const root = document.getElementById('settings-modal-root');
    if (!state.settingsModalOpen) { root.innerHTML = ''; return; }

    root.innerHTML = `
        <div class="modal-backdrop fixed inset-0 bg-black/50 z-[70] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            <div class="modal-content bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-in">
                
                <div class="p-5 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">Paramètres</h2>
                        <p class="text-xs text-slate-400">Configuration de l'application</p>
                    </div>
                    <button onclick="closeSettingsModal()" class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
                
                <div class="flex-1 overflow-y-auto p-5 space-y-6">
                    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white"><i data-lucide="save" class="w-5 h-5"></i></div>
                            <div><h3 class="font-bold text-slate-900">Sauvegardes</h3><p class="text-xs text-slate-500">Points de restauration</p></div>
                        </div>
                        <button onclick="createBackup()" class="w-full py-2.5 bg-white border border-amber-300 text-amber-700 font-bold rounded-lg hover:bg-amber-100 transition text-sm mb-3">+ Nouvelle sauvegarde</button>
                        <div id="backup-list-container" class="space-y-2"><div class="text-center py-2"><div class="loader mx-auto"></div></div></div>
                    </div>
                    
                    <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white"><i data-lucide="utensils" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Alimentaire</h3>
                        </div>
                        ${renderSettingsSection('Sous-catégories', 'foodSubcats', 'Ex: Féculents...')}
                        ${renderSettingsSection('Produits suggérés', 'foodProducts', 'Nouveau produit...')}
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white"><i data-lucide="sparkles" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Hygiène</h3>
                        </div>
                        ${renderSettingsSection('Sous-catégories', 'hygieneSubcats', 'Ex: Savons...')}
                        ${renderSettingsSection('Produits suggérés', 'hygieneProducts', 'Nouveau produit...')}
                    </div>
                    
                    <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><i data-lucide="shirt" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Vêtements</h3>
                        </div>
                        ${renderSettingsSection('Sous-catégories', 'clothingSubcats', 'Ex: Manteaux...')}
                        ${renderSettingsSection('Produits suggérés', 'clothingProducts', 'Nouveau produit...')}
                    </div>
                    
                    <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center text-white"><i data-lucide="truck" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Logistique</h3>
                        </div>
                        ${renderSettingsSection('Lieux de Distribution', 'distribLocations', 'Nouveau lieu...')}
                        ${renderSettingsSection('Lieux de Collecte', 'collectLocations', 'Nouveau lieu...')}
                    </div>
                </div>
                
                <div class="p-4 border-t border-slate-100 flex-shrink-0">
                    <button onclick="closeSettingsModal()" class="w-full py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition">Fermer</button>
                </div>
            </div>
        </div>`;

    createIcons({ icons });
    loadBackups();
}

async function loadBackups() {
    const container = document.getElementById('backup-list-container');
    if (!container) return;

    const { data } = await supabaseClient.from('backups').select('*').order('created_at', { ascending: false }).limit(5);

    if (!data || data.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-500 italic text-center py-2">Aucune sauvegarde</div>`;
    } else {
        container.innerHTML = data.map(b => `
            <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-amber-100">
                <div>
                    <div class="font-bold text-sm text-slate-900">${b.name}</div>
                    <div class="text-[10px] text-slate-400">${new Date(b.created_at).toLocaleString('fr-FR')}</div>
                </div>
                <div class="flex gap-2">
                    <button onclick="restoreBackup(${b.id})" class="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg font-bold hover:bg-amber-200 transition">Restaurer</button>
                    <button onclick="deleteBackup(${b.id})" class="text-slate-400 hover:text-red-500 transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
            </div>
        `).join('');
    }

    createIcons({ icons });
}
