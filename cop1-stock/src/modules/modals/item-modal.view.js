// ==================================================================================
// VUE MODALE ITEM (Ajout/Edition Produit) - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../../core/state.js';
import { saveItem, deleteItem, saveQuickAdd } from '../../services/stock.js';
import { createIcons, icons } from 'lucide';

// Expose globalement
window.saveItem = saveItem;
window.deleteItem = deleteItem;
window.saveQuickAdd = saveQuickAdd;
window.closeModal = closeModal;
window.closeQuickAddModal = closeQuickAddModal;
window.openModal = openModal;
window.openQuickAddModal = openQuickAddModal;
window.renderModal = renderModal;

export function openModal(m, id) {
    state.modalOpen = true;
    if (m === 'edit') {
        const i = state.items.find(x => x.id == id);
        state.editingItem = i ? { ...i, mainCategory: i.category, subCategory: i.sub_category, minThreshold: i.threshold } : null;
    } else {
        state.editingItem = null;
        state.newItem = { name: '', quantity: '', mainCategory: 'ALIMENTAIRE', subCategory: state.foodSubcats[0] || '', remarks: '', minThreshold: 5 };
    }
    renderModal();
}

export function closeModal() {
    const root = document.getElementById('modal-root');
    const modal = root?.querySelector('.modal-content');
    const backdrop = root?.querySelector('.modal-backdrop');

    if (modal && backdrop) {
        modal.classList.remove('animate-scale-in');
        modal.classList.add('animate-scale-out');
        backdrop.style.opacity = '0';
        backdrop.style.transition = 'opacity 0.3s ease';
        setTimeout(() => { state.modalOpen = false; renderModal(); }, 250);
    } else {
        state.modalOpen = false;
        renderModal();
    }
}

export function openQuickAddModal(id) {
    state.quickAddItem = state.items.find(i => i.id == id);
    state.quickAddModalOpen = true;
    renderQuickAddModal();
}

export function closeQuickAddModal() {
    const root = document.getElementById('quick-add-root');
    const modal = root?.querySelector('.modal-content');

    if (modal) {
        modal.classList.add('animate-scale-out');
        setTimeout(() => { state.quickAddModalOpen = false; renderQuickAddModal(); }, 250);
    } else {
        state.quickAddModalOpen = false;
        renderQuickAddModal();
    }
}

// --- HELPER BATCHS ---
window.addBatch = () => {
    const type = document.getElementById('new-batch-type')?.value;
    const date = document.getElementById('new-batch-date')?.value;
    const info = document.getElementById('new-batch-info')?.value;
    if (!date) return window.showToast?.("Date requise", "error");
    const item = state.editingItem || state.newItem;
    if (!item.batches) item.batches = [];
    item.batches.push({ type, date, info });
    renderModal();
};

window.removeBatch = (index) => {
    const item = state.editingItem || state.newItem;
    if (item.batches) { item.batches.splice(index, 1); renderModal(); }
};

const CATEGORY_CONFIG = {
    ALIMENTAIRE: { color: 'emerald', icon: 'utensils', label: 'Alimentaire' },
    HYGIENE: { color: 'purple', icon: 'sparkles', label: 'Hygiène' },
    VETEMENTS: { color: 'indigo', icon: 'shirt', label: 'Vêtements' }
};

function getBatchesHTML(item) {
    if (!item.batches || item.batches.length === 0) {
        return `<div class="text-xs text-slate-400 font-medium text-center p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">Aucune date enregistrée</div>`;
    }
    return item.batches.map((b, idx) => `
        <div class="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm mb-2">
            <div class="flex items-center gap-3">
                <span class="text-[10px] font-bold px-2 py-1 rounded-lg ${b.type === 'DLC' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}">${b.type || 'DLC'}</span>
                <div>
                    <div class="font-bold text-slate-800 text-sm">${new Date(b.date).toLocaleDateString('fr-FR')}</div>
                    ${b.info ? `<div class="text-[10px] text-slate-400 italic">${b.info}</div>` : ''}
                </div>
            </div>
            <button type="button" onclick="window.removeBatch(${idx})" class="w-8 h-8 bg-red-50 text-red-400 rounded-lg flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
    `).join('');
}

export function renderModal() {
    const root = document.getElementById('modal-root');
    if (!state.modalOpen) { root.innerHTML = ''; return; }

    const item = state.editingItem || state.newItem;
    const isEdit = !!state.editingItem;
    if (!item.batches) item.batches = [];

    const categoryConfig = CATEGORY_CONFIG[item.mainCategory] || CATEGORY_CONFIG.ALIMENTAIRE;
    const listToUse = item.mainCategory === 'ALIMENTAIRE' ? state.foodProducts : item.mainCategory === 'HYGIENE' ? state.hygieneProducts : state.clothingProducts;
    const suggs = listToUse.sort();
    const listId = "list-modal-name";
    const inputId = "input-modal-name";

    const optionsHTML = suggs.map(s => `<div onclick="window.selectCustomOption('${listId}', '${inputId}', '${s.replace(/'/g, "\\'")}', false, 0, true)" class="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer text-slate-700 font-semibold text-sm transition">${s}</div>`).join('');
    const subCatList = item.mainCategory === 'ALIMENTAIRE' ? state.foodSubcats : item.mainCategory === 'HYGIENE' ? state.hygieneSubcats : state.clothingSubcats;

    root.innerHTML = `
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 z-[100] flex items-end sm:items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
        <div class="modal-content bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-in">
            <div class="relative bg-gradient-to-r from-slate-900 to-slate-800 p-5 flex-shrink-0">
                <div class="relative z-10 flex justify-between items-start">
                    <div class="min-w-0">
                        <h2 class="text-xl font-black text-white tracking-tight mb-1">${isEdit ? 'Modifier le produit' : 'Ajouter un produit'}</h2>
                        <p class="text-slate-400 font-medium text-xs flex items-center gap-2"><i data-lucide="${categoryConfig.icon}" class="w-3.5 h-3.5"></i> ${categoryConfig.label}</p>
                    </div>
                    <button onclick="closeModal()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"><i data-lucide="x" class="w-5 h-5"></i></button>
                </div>
            </div>
            
            <div class="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
                <form id="item-form" onsubmit="event.preventDefault(); saveItem()" class="space-y-4">
                    <div class="bg-white p-1.5 rounded-2xl flex shadow-sm border border-slate-100">
                        <button type="button" onclick="window.updateModalData('mainCategory', 'ALIMENTAIRE'); window.updateModalData('subCategory', '${state.foodSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${item.mainCategory === 'ALIMENTAIRE' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}"><i data-lucide="utensils" class="w-4 h-4"></i> Alimentaire</button>
                        <button type="button" onclick="window.updateModalData('mainCategory', 'HYGIENE'); window.updateModalData('subCategory', '${state.hygieneSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${item.mainCategory === 'HYGIENE' ? 'bg-purple-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}"><i data-lucide="sparkles" class="w-4 h-4"></i> Hygiène</button>
                        <button type="button" onclick="window.updateModalData('mainCategory', 'VETEMENTS'); window.updateModalData('subCategory', '${state.clothingSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${item.mainCategory === 'VETEMENTS' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}"><i data-lucide="shirt" class="w-4 h-4"></i> Vêtements</button>
                    </div>

                    <div>
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Sous-catégorie</label>
                        <div class="relative">
                            <select onchange="window.updateModalData('subCategory', this.value)" class="w-full p-4 bg-white rounded-2xl font-semibold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 appearance-none transition-all">
                                ${subCatList.map(sc => `<option value="${sc}" ${item.subCategory === sc ? 'selected' : ''}>${sc}</option>`).join('')}
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"></i>
                        </div>
                    </div>

                    <div>
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Nom du produit *</label>
                        <div class="relative custom-select-container">
                            <input id="${inputId}" type="text" value="${item.name}" onfocus="window.openCustomSelect?.('${listId}')" oninput="window.updateModalData('name', this.value); window.openCustomSelect?.('${listId}'); window.filterCustomSelect?.('${listId}', this.value)" class="w-full p-4 bg-white rounded-2xl font-semibold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 placeholder-slate-300 transition-all" placeholder="Ex: Pâtes, Savon..." autocomplete="off">
                            <div id="${listId}" class="custom-dropdown-list hidden absolute z-50 w-full bg-white border border-slate-100 rounded-xl shadow-xl max-h-48 overflow-y-auto mt-2">${optionsHTML}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Stock actuel</label><input type="number" value="${item.quantity}" oninput="window.updateModalData('quantity', this.value)" class="w-full p-4 bg-white rounded-2xl font-bold text-lg text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 text-center transition-all"></div>
                        <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Alerte min.</label><input type="number" value="${item.minThreshold}" oninput="window.updateModalData('minThreshold', this.value)" class="w-full p-4 bg-white rounded-2xl font-bold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 text-center transition-all"></div>
                    </div>

                    <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Note / Info</label><input type="text" value="${item.remarks || ''}" oninput="window.updateModalData('remarks', this.value)" class="w-full p-4 bg-white rounded-2xl font-medium text-sm text-slate-700 outline-none border-2 border-slate-100 focus:border-brand-400 transition-all" placeholder="Ex: Sans gluten..."></div>

                    <div class="bg-white p-4 rounded-2xl border-2 border-slate-100">
                        <div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center"><i data-lucide="calendar-clock" class="w-4 h-4 text-brand-600"></i></div><span class="text-sm font-bold text-slate-700">Dates & Péremptions</span></div>
                        <div class="mb-4 max-h-32 overflow-y-auto">${getBatchesHTML(item)}</div>
                        <div class="bg-slate-50 p-3 rounded-xl">
                            <div class="text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">Ajouter une date</div>
                            <div class="grid grid-cols-2 gap-2 mb-2">
                                <select id="new-batch-type" class="p-3 bg-white rounded-xl text-xs font-bold text-slate-700 outline-none border border-slate-200"><option value="DLC">DLC (Périm.)</option><option value="DLUO">DLUO (Qualité)</option></select>
                                <input type="date" id="new-batch-date" class="p-3 bg-white rounded-xl text-xs font-bold text-slate-700 outline-none border border-slate-200">
                            </div>
                            <div class="flex gap-2">
                                <input type="text" id="new-batch-info" class="flex-1 p-3 bg-white rounded-xl text-xs font-medium outline-none placeholder-slate-300 border border-slate-200" placeholder="Note (ex: Lot #12)">
                                <button type="button" onclick="window.addBatch()" class="bg-brand-600 text-white px-4 rounded-xl hover:bg-brand-700 transition shadow-lg flex items-center justify-center"><i data-lucide="plus" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="p-4 bg-white border-t border-slate-100 flex gap-3 flex-shrink-0">
                ${isEdit ? '<button type="button" onclick="deleteItem()" class="flex-1 py-3.5 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition flex items-center justify-center gap-2"><i data-lucide="trash-2" class="w-4 h-4"></i> Supprimer</button>' : ''}
                <button type="submit" form="item-form" class="flex-1 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="${isEdit ? 'save' : 'plus'}" class="w-4 h-4"></i> ${isEdit ? 'Enregistrer' : 'Ajouter'}</button>
            </div>
        </div>
    </div>`;

    window.updateModalData = (f, v) => {
        const item = state.editingItem || state.newItem;
        if (f === 'quantity' || f === 'minThreshold') item[f] = Number(v);
        else item[f] = v;
    };

    createIcons({ icons });
}

export function renderQuickAddModal() {
    const root = document.getElementById('quick-add-root');
    if (!state.quickAddModalOpen) { root.innerHTML = ''; return; }

    const item = state.quickAddItem;
    const categoryConfig = CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG.ALIMENTAIRE;

    root.innerHTML = `
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
        <div class="modal-content bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in">
            <div class="relative bg-gradient-to-r from-slate-900 to-slate-800 p-5">
                <div class="relative z-10 flex justify-between items-start">
                    <div><h3 class="text-lg font-black text-white mb-0.5">${item.name}</h3><p class="text-slate-400 text-xs font-medium flex items-center gap-1.5"><i data-lucide="${categoryConfig.icon}" class="w-3 h-3"></i> Stock actuel: <span class="text-white font-bold">${item.quantity}</span></p></div>
                    <button onclick="closeQuickAddModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"><i data-lucide="x" class="w-4 h-4"></i></button>
                </div>
            </div>
            <div class="p-5 bg-slate-50">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Quantité à ajouter / retirer</label>
                <input id="quick-qty" type="number" placeholder="+10 ou -5" class="w-full p-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-brand-400 text-center text-2xl font-bold text-slate-900 outline-none transition-all">
                <p class="text-xs text-slate-400 mt-2 text-center">Utilisez un nombre négatif pour retirer</p>
            </div>
            <div class="p-4 bg-white border-t border-slate-100 flex gap-3">
                <button onclick="closeQuickAddModal()" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">Annuler</button>
                <button onclick="saveQuickAdd()" class="flex-1 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="check" class="w-4 h-4"></i> Valider</button>
            </div>
        </div>
    </div>`;

    createIcons({ icons });
    setTimeout(() => document.getElementById('quick-qty')?.focus(), 100);
}
