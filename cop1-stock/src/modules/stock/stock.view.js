// ==================================================================================
// VUE STOCK - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../../core/state.js';
import { downloadStockCSV } from '../../services/utils.js';
import { openModal, openQuickAddModal } from '../modals/item-modal.view.js';
import { createIcons, icons } from 'lucide';

// Expose les fonctions globalement pour les événements inline
window.setFilter = setFilter;
window.setSearch = setSearch;
window.downloadStockCSV = downloadStockCSV;
window.openModal = openModal;
window.openQuickAddModal = openQuickAddModal;

export function setFilter(f) {
    state.filterMain = f;
    if (window.renderApp) window.renderApp();
}

export function setSearch(v) {
    state.searchTerm = v;
    const container = document.getElementById('stock-results-container');
    if (container) {
        container.innerHTML = getStockListHTML();
        createIcons({ icons }); // VERSION NPM
    }
}

// --- GESTION INTELLIGENTE DLC vs DLUO ---
export function getBatchBadge(batches) {
    if (!batches || !Array.isArray(batches) || batches.length === 0) return '';

    const sorted = [...batches].sort((a, b) => new Date(a.date) - new Date(b.date));
    const urgent = sorted[0];
    if (!urgent || !urgent.date) return '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(urgent.date);
    const diffTime = dateObj - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let colorClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    let icon = 'calendar';
    let textDate = dateObj.toLocaleDateString('fr-FR');
    let label = '';
    const type = urgent.type || 'DLC';

    if (diffDays < 0) {
        if (type === 'DLC') {
            colorClass = 'bg-red-100 text-red-700 border-red-300 font-extrabold';
            icon = 'alert-triangle';
            label = `⛔ STOP`;
        } else {
            colorClass = 'bg-orange-100 text-orange-700 border-orange-300 font-bold';
            icon = 'info';
            label = `⚠️ DLUO`;
        }
    } else if (diffDays === 0) {
        colorClass = 'bg-red-50 text-red-600 border-red-200 font-bold';
        label = `Aujourd'hui !`;
    } else if (diffDays <= 7) {
        colorClass = 'bg-amber-50 text-amber-700 border-amber-200 font-bold';
        label = `J-${diffDays}`;
    } else if (diffDays <= 30) {
        colorClass = 'bg-blue-50 text-blue-600 border-blue-200';
        label = `${textDate}`;
    } else {
        colorClass = 'bg-slate-50 text-slate-500 border-slate-200';
        label = `${textDate}`;
    }

    return `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] border ${colorClass}">
            <i data-lucide="${icon}" class="w-3 h-3"></i> ${label}
        </span>`;
}

export function getStockListHTML() {
    const filteredItems = state.items.filter(i =>
        (state.filterMain === 'TOUS' || i.category === state.filterMain) &&
        i.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    const renderCategoryBlock = (mainCatTitle, mainCatKey, subCatList, items, emoji) => {
        const catItems = items.filter(i => i.category === mainCatKey);
        if (catItems.length === 0) return '';

        const grouped = {};
        subCatList.forEach(sub => grouped[sub] = []);
        catItems.forEach(i => {
            const sub = i.sub_category || 'Autre';
            if (!grouped[sub]) grouped[sub] = [];
            grouped[sub].push(i);
        });

        let html = `
        <div class="mb-8">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1 flex items-center gap-2">
                ${emoji} ${mainCatTitle}
                <span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-[10px] font-black">${catItems.length}</span>
            </h3>`;

        for (const [subCat, products] of Object.entries(grouped)) {
            if (products.length === 0) continue;

            html += `
            <div class="mb-6">
                <div class="inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase mb-3 ml-1 border border-slate-200">${subCat}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;

            products.sort((a, b) => a.name.localeCompare(b.name)).forEach(i => {
                const isLow = i.quantity <= i.threshold;
                html += `
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                    <div class="flex items-start justify-between gap-3 mb-2">
                        <div class="min-w-0">
                            <h4 class="font-bold text-slate-900 truncate text-base">${i.name}</h4>
                            ${i.remarks ? `<p class="text-xs text-slate-400 truncate mt-0.5">${i.remarks}</p>` : ''}
                        </div>
                        <div class="text-center px-2 py-1.5 rounded-xl ${isLow ? 'bg-red-50' : 'bg-slate-50'} min-w-[3.5rem]">
                            <div class="text-lg font-black ${isLow ? 'text-red-500' : 'text-slate-900'} leading-none">${i.quantity}</div>
                        </div>
                    </div>

                    <div class="mt-auto pt-3 flex items-center justify-between border-t border-slate-50">
                        <div class="flex flex-wrap gap-1">
                            ${isLow ? '<span class="text-[9px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">Stock Bas</span>' : ''}
                            ${getBatchBadge(i.batches)}
                        </div>
                        
                        <div class="flex gap-1">
                            <button onclick="openQuickAddModal(${i.id})" 
                                class="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-brand-100" title="Ajout rapide">
                                <i data-lucide="plus" class="w-4 h-4"></i>
                            </button>
                            <button onclick="openModal('edit', ${i.id})" 
                                class="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 transition-all border border-slate-100" title="Modifier">
                                <i data-lucide="settings-2" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
            });

            html += `</div></div>`;
        }
        html += `</div>`;
        return html;
    };

    let html = '';
    if (state.filterMain === 'TOUS' || state.filterMain === 'ALIMENTAIRE') {
        html += renderCategoryBlock('Alimentaire', 'ALIMENTAIRE', state.foodSubcats, filteredItems, '🍎');
    }
    if (state.filterMain === 'TOUS' || state.filterMain === 'HYGIENE') {
        html += renderCategoryBlock('Hygiène', 'HYGIENE', state.hygieneSubcats, filteredItems, '🧴');
    }
    if (state.filterMain === 'TOUS' || state.filterMain === 'VETEMENTS') {
        html += renderCategoryBlock('Vêtements', 'VETEMENTS', state.clothingSubcats, filteredItems, '👕');
    }

    if (filteredItems.length === 0) {
        return `
        <div class="text-center py-16">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i>
            </div>
            <p class="font-bold text-slate-600">Aucun produit trouvé</p>
            <p class="text-sm text-slate-400 mt-1">Essayez une autre recherche</p>
        </div>`;
    }

    return html;
}

export function renderList(div) {
    const alim = state.items.filter(i => i.category === 'ALIMENTAIRE').reduce((a, b) => a + b.quantity, 0);
    const hyg = state.items.filter(i => i.category === 'HYGIENE').reduce((a, b) => a + b.quantity, 0);
    const vet = state.items.filter(i => i.category === 'VETEMENTS').reduce((a, b) => a + b.quantity, 0);

    div.innerHTML = `
        <div class="animate-fade-in pb-24 md:pb-10 max-w-none">
            
            <!-- STAT CARDS (Style minimaliste premium) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <!-- Card Alimentaire -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Alimentaire</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300">${alim}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="utensils" class="absolute right-6 bottom-6 w-8 h-8 text-brand-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>

                <!-- Card Hygiène -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hygiène</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300">${hyg}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="sparkles" class="absolute right-6 bottom-6 w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>

                <!-- Card Vêtements -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Vêtements</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300">${vet}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="shirt" class="absolute right-6 bottom-6 w-8 h-8 text-indigo-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>
                
                <!-- Total Card -->
                 <div class="hidden md:block bg-gradient-to-br from-slate-800 to-slate-900 p-5 md:p-6 rounded-[2rem] shadow-lg relative overflow-hidden group">
                     <div class="relative z-10 text-white">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Produits</div>
                        <div class="text-4xl md:text-5xl font-black group-hover:scale-105 transition-transform origin-left duration-300">${alim + hyg + vet}</div>
                    </div>
                    <i data-lucide="package" class="absolute right-6 bottom-6 w-8 h-8 text-slate-700 group-hover:text-slate-600 transition-colors"></i>
                </div>

                 <div class="hidden md:flex bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 items-center justify-center text-center group cursor-pointer hover:border-brand-200 transition-colors" onclick="downloadStockCSV()">
                     <div>
                        <div class="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i data-lucide="download" class="w-6 h-6"></i>
                        </div>
                        <div class="font-bold text-slate-900 text-sm">Export CSV</div>
                    </div>
                </div>

            </div>

            <!-- FILTER PILLS -->
            <div class="flex gap-2 mb-6 flex-wrap">
                <button onclick="setFilter('TOUS')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${state.filterMain === 'TOUS'
            ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20'
            : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}">
                    Tout voir
                </button>
                <button onclick="setFilter('ALIMENTAIRE')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${state.filterMain === 'ALIMENTAIRE'
            ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/30'
            : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}">
                    <span>🍎</span> Alimentaire
                </button>
                <button onclick="setFilter('HYGIENE')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${state.filterMain === 'HYGIENE'
            ? 'bg-purple-600 text-white shadow-xl shadow-purple-500/30'
            : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}">
                    <span>✨</span> Hygiène
                </button>
                <button onclick="setFilter('VETEMENTS')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${state.filterMain === 'VETEMENTS'
            ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/30'
            : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}">
                    <span>👕</span> Vêtements
                </button>
            </div>

            <!-- SEARCH BAR -->
            <div class="relative mb-8">
                <i data-lucide="search" class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300"></i>
                <input type="text" placeholder="Rechercher un produit..." value="${state.searchTerm}" oninput="setSearch(this.value)" 
                    class="w-full pl-14 pr-4 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 outline-none font-medium text-slate-800 placeholder-slate-300 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all duration-300 focus:scale-[1.01] focus:shadow-lg">
            </div>
            
            <!-- RESULTS -->
            <div id="stock-results-container">
                ${getStockListHTML()}
            </div>

            <!-- EXPORT LINK -->
            <div class="text-center mt-8">
                <button onclick="downloadStockCSV()" class="text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-2 hover:underline">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    Exporter en CSV
                </button>
            </div>
        </div>`;

    // VERSION NPM
    createIcons({ icons });
}
