// ==================================================================================
// VUE HISTORIQUE - VERSION REFACTORISÉE
// ==================================================================================

import { state } from '../../core/state.js';
import { downloadHistoryCSV, getOpStyle, escapeHtml } from '../../services/utils.js';
import { getHistory, processHistoryGroups, countActiveFilters, resetHistFilters } from '../../services/history.js';
import { createIcons, icons } from 'lucide';

// État local pour la pagination
let localState = {
    page: 1,
    limit: 20,
    total: 0
};

// Debounce timer
let searchDebounceTimer = null;

// Expose fonctions globalement
window.downloadHistoryCSV = downloadHistoryCSV;

window.setHistFilter = async (key, val) => {
    state.histFilter[key] = val;

    // Si on change dateFrom ou dateTo, on désactive year/month
    if (key === 'dateFrom' || key === 'dateTo') {
        if (val) {
            // Ne pas réinitialiser explicitement pour garder l'UX fluide
            // Les filtres year/month seront ignorés par la logique de priorité
        }
    }

    // Reset page on filter change
    localState.page = 1;
    updateFilterIndicators();
    await loadHistoryData();
};

window.setHistFilterDebounced = (key, val) => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(async () => {
        await window.setHistFilter(key, val);
    }, 300);
};

window.resetAllFilters = async () => {
    resetHistFilters();
    localState.page = 1;
    updateFilterIndicators();
    await loadHistoryData();
    // Re-render les selects et inputs
    const div = document.getElementById('history-main-container');
    if (div) renderHist(div);
};

window.changeHistoryPage = async (newPage) => {
    localState.page = newPage;
    await loadHistoryData();
};

window.clearSingleFilter = async (key) => {
    state.histFilter[key] = '';
    localState.page = 1;
    updateFilterIndicators();
    await loadHistoryData();
    // Re-render pour mettre à jour les inputs
    const div = document.getElementById('history-main-container');
    if (div) renderHist(div);
};

function updateFilterIndicators() {
    const count = countActiveFilters(state.histFilter);
    const badge = document.getElementById('filter-count-badge');
    const resetBtn = document.getElementById('reset-filters-btn');

    if (badge) {
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    }
    if (resetBtn) {
        resetBtn.classList.toggle('hidden', count === 0);
    }
}

export function getHistoryListHTML() {
    if (!state.groupedHistory || state.groupedHistory.length === 0) {
        return `<div class="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="clock" class="w-8 h-8 text-slate-300"></i>
            </div>
            <p class="text-slate-400 font-semibold">Aucun historique</p>
            <p class="text-xs text-slate-300 mt-1">Les opérations apparaîtront ici</p>
        </div>`;
    }

    return state.groupedHistory.map(group => {
        const style = getOpStyle(group.action);
        const totalQty = group.items.reduce((acc, i) => acc + i.change_qty, 0);

        const colorMap = {
            orange: { gradient: 'from-orange-400 to-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
            green: { gradient: 'from-emerald-400 to-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
            blue: { gradient: 'from-blue-400 to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
            purple: { gradient: 'from-purple-400 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
            teal: { gradient: 'from-teal-400 to-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600' },
            red: { gradient: 'from-red-400 to-red-600', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600' },
            gray: { gradient: 'from-slate-400 to-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-600' }
        };
        const c = colorMap[style.color] || colorMap.gray;

        const itemsHTML = group.items.map(i => `
            <div class="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50 transition">
                <span class="text-sm text-slate-700 font-medium">${escapeHtml(i.item_name)}</span>
                <span class="font-mono font-bold text-sm px-2 py-0.5 rounded-lg ${i.change_qty > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}">
                    ${i.change_qty > 0 ? '+' : ''}${i.change_qty}
                </span>
            </div>
        `).join('');

        return `
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition group">
            <div class="${c.bg} px-4 py-3 flex justify-between items-center border-b ${c.border}">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center text-white shadow-sm">
                        <i data-lucide="${style.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <div class="font-bold text-sm text-slate-900">${style.label}</div>
                        <div class="text-xs text-slate-500 flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-3 h-3"></i>
                            ${escapeHtml(group.location) || 'Non spécifié'}
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-xs font-bold text-slate-900">${group.date}</div>
                    <div class="text-[10px] font-bold ${totalQty > 0 ? 'text-emerald-600' : 'text-red-500'}">
                        ${totalQty > 0 ? '+' : ''}${totalQty} unités
                    </div>
                </div>
            </div>
            <div class="divide-y divide-slate-50">${itemsHTML}</div>
        </div>`;
    }).join('');
}

function getActiveFiltersHTML() {
    const f = state.histFilter;
    const hasDateRange = f.dateFrom || f.dateTo;
    const tags = [];

    if (f.search && f.search.trim()) {
        tags.push(`
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                <i data-lucide="search" class="w-3 h-3"></i>
                "${escapeHtml(f.search)}"
                <button onclick="clearSingleFilter('search')" class="ml-1 hover:bg-blue-100 rounded-full p-0.5 transition">
                    <i data-lucide="x" class="w-3 h-3"></i>
                </button>
            </span>
        `);
    }

    if (hasDateRange) {
        if (f.dateFrom) {
            tags.push(`
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    Depuis ${f.dateFrom}
                    <button onclick="clearSingleFilter('dateFrom')" class="ml-1 hover:bg-purple-100 rounded-full p-0.5 transition">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                </span>
            `);
        }
        if (f.dateTo) {
            tags.push(`
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    Jusqu'au ${f.dateTo}
                    <button onclick="clearSingleFilter('dateTo')" class="ml-1 hover:bg-purple-100 rounded-full p-0.5 transition">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                </span>
            `);
        }
    } else {
        if (f.year) {
            tags.push(`
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    Année ${f.year}
                    <button onclick="clearSingleFilter('year')" class="ml-1 hover:bg-amber-100 rounded-full p-0.5 transition">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                </span>
            `);
        }
        if (f.month) {
            const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
            tags.push(`
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    ${months[parseInt(f.month) - 1] || f.month}
                    <button onclick="clearSingleFilter('month')" class="ml-1 hover:bg-amber-100 rounded-full p-0.5 transition">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                </span>
            `);
        }
    }

    return tags.length > 0 ? `
        <div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100">
            ${tags.join('')}
        </div>
    ` : '';
}

export function renderHist(div) {
    div.id = 'history-main-container';

    const yearsSet = new Set([2024, new Date().getFullYear()]);
    state.history.forEach(h => yearsSet.add(new Date(h.created_at).getFullYear()));
    const sortedYears = Array.from(yearsSet).sort((a, b) => b - a);

    const f = state.histFilter;
    const hasDateRange = f.dateFrom || f.dateTo;
    const activeCount = countActiveFilters(f);

    const yearOptions = sortedYears.map(y =>
        `<option value="${y}" ${f.year === y.toString() ? 'selected' : ''}>${y}</option>`
    ).join('');

    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

    div.innerHTML = `
        <div class="animate-fade-in pb-24 max-w-4xl mx-auto">
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 mb-6 shadow-2xl">
                <div class="relative flex items-center justify-between">
                    <div class="text-white">
                        <h1 class="text-2xl font-black tracking-tight flex items-center gap-2">
                            <i data-lucide="clock" class="w-7 h-7"></i> Historique
                        </h1>
                        <p class="text-white/60 text-sm font-medium mt-1">Traçabilité des opérations</p>
                    </div>
                    <button onclick="downloadHistoryCSV()" class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition group">
                        <i data-lucide="download" class="w-5 h-5 group-hover:scale-110 transition"></i>
                    </button>
                </div>
                <div class="flex gap-3 mt-5">
                    <div class="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                        <div class="text-xl font-black text-white">${state.groupedHistory?.length || 0}</div>
                        <div class="text-[9px] font-bold text-white/50 uppercase">Opérations</div>
                    </div>
                    <div class="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                        <div class="text-xl font-black text-emerald-400">${state.history?.length || 0}</div>
                        <div class="text-[9px] font-bold text-white/50 uppercase">Entrées</div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 overflow-hidden">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <i data-lucide="filter" class="w-4 h-4 text-slate-400"></i>
                        <span class="text-xs font-bold text-slate-400 uppercase">Filtres</span>
                        <span id="filter-count-badge" class="w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ${activeCount === 0 ? 'hidden' : ''}">${activeCount}</span>
                    </div>
                    <button id="reset-filters-btn" onclick="resetAllFilters()" class="text-xs font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${activeCount === 0 ? 'hidden' : ''}">
                        <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
                        Réinitialiser
                    </button>
                </div>
                
                <!-- Période rapide (Année/Mois) - désactivé si dates précises -->
                <div class="flex gap-2 mb-3">
                    <select onchange="setHistFilter('year', this.value)" class="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-sm outline-none min-w-0 ${hasDateRange ? 'opacity-50 cursor-not-allowed' : ''}" ${hasDateRange ? 'disabled' : ''}>
                        <option value="">Toutes les années</option>
                        ${yearOptions}
                    </select>
                    <select onchange="setHistFilter('month', this.value)" class="flex-[2] p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-sm outline-none min-w-0 ${hasDateRange ? 'opacity-50 cursor-not-allowed' : ''}" ${hasDateRange ? 'disabled' : ''}>
                        <option value="">Tous les mois</option>
                        ${months.map((m, i) => `<option value="${i + 1}" ${f.month === (i + 1).toString() ? 'selected' : ''}>${m}</option>`).join('')}
                    </select>
                </div>
                
                <!-- Dates précises -->
                <div class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center mb-3 overflow-hidden">
                    <div class="relative flex-1 min-w-0">
                        <i data-lucide="calendar" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10"></i>
                        <input type="date" onchange="setHistFilter('dateFrom', this.value)" value="${f.dateFrom}" 
                            class="w-full max-w-full pl-10 pr-2 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium outline-none box-border ${f.dateFrom ? 'border-purple-300 bg-purple-50' : ''}">
                    </div>
                    <span class="text-slate-300 font-bold text-sm text-center hidden sm:block flex-shrink-0">→</span>
                    <div class="relative flex-1 min-w-0">
                        <i data-lucide="calendar" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10"></i>
                        <input type="date" onchange="setHistFilter('dateTo', this.value)" value="${f.dateTo}" 
                            class="w-full max-w-full pl-10 pr-2 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium outline-none box-border ${f.dateTo ? 'border-purple-300 bg-purple-50' : ''}">
                    </div>
                </div>
                
                ${hasDateRange ? `
                    <div class="text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-lg mb-3 flex items-center gap-2">
                        <i data-lucide="info" class="w-3 h-3"></i>
                        Les filtres Année/Mois sont désactivés quand des dates précises sont utilisées
                    </div>
                ` : ''}
                
                <!-- Recherche avec debounce -->
                <div class="relative">
                    <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"></i>
                    <input type="text" placeholder="Rechercher produit, lieu, utilisateur..." 
                        oninput="setHistFilterDebounced('search', this.value)" 
                        value="${f.search}" 
                        class="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 font-medium outline-none ${f.search ? 'border-blue-300 bg-blue-50' : ''}">
                </div>
                
                <!-- Tags des filtres actifs -->
                ${getActiveFiltersHTML()}
            </div>

            <div id="history-results-container" class="space-y-4">
                <div class="text-center py-12">
                     <div class="animate-spin w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full mx-auto mb-3"></div>
                     <p class="text-slate-400 font-bold animate-pulse">Chargement de l'historique...</p>
                </div>
            </div>
            
            <!-- PAGINATION -->
            <div id="history-pagination" class="mt-6"></div>
        </div>`;

    // Initial Load
    loadHistoryData();

    createIcons({ icons });
}

export async function loadHistoryData() {
    const container = document.getElementById('history-results-container');
    const paginationContainer = document.getElementById('history-pagination');

    if (!container) return;

    container.style.opacity = '0.5';

    // Fetch Data
    const { data, count, error } = await getHistory(localState.page, localState.limit, state.histFilter);
    container.style.opacity = '1';

    if (error) {
        container.innerHTML = `
            <div class="text-center py-16 bg-white rounded-2xl border border-red-100">
                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="alert-triangle" class="w-8 h-8 text-red-500"></i>
                </div>
                <p class="text-red-500 font-bold">Erreur de chargement</p>
                <p class="text-xs text-red-300 mt-1">Veuillez réessayer</p>
            </div>`;
        createIcons({ icons });
        return;
    }

    localState.total = count || 0;
    const totalPages = Math.ceil(localState.total / localState.limit);

    // Process Grouping (no filtering, just grouping)
    processHistoryGroups(data || []);

    // Render List
    container.innerHTML = getHistoryListHTML();

    // Render Pagination
    renderPagination(paginationContainer, totalPages);

    createIcons({ icons });
}

function renderPagination(container, totalPages) {
    if (!container) return;
    if (localState.total === 0) {
        container.innerHTML = '';
        return;
    }

    const start = (localState.page - 1) * localState.limit + 1;
    const end = Math.min(localState.page * localState.limit, localState.total);

    container.innerHTML = `
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <div class="text-xs font-semibold text-slate-400">
                Affichage <span class="text-slate-700 font-bold">${start}-${end}</span> sur <span class="text-slate-700 font-bold">${localState.total}</span> opérations
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeHistoryPage(${localState.page - 1})" ${localState.page === 1 ? 'disabled' : ''} 
                    class="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition hover:shadow-sm">
                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                </button>
                <span class="text-sm font-bold text-slate-700 min-w-[4rem] text-center bg-slate-50 py-2 rounded-lg border border-slate-100">${localState.page} / ${totalPages || 1}</span>
                <button onclick="changeHistoryPage(${localState.page + 1})" ${localState.page >= totalPages ? 'disabled' : ''} 
                    class="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition hover:shadow-sm">
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `;
    createIcons({ icons, root: container });
}
