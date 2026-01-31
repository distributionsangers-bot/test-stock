// ==================================================================================
// SERVICE HISTORIQUE - VERSION NPM LUCIDE
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';
import { createIcons, icons } from 'lucide';

export async function logHistory(name, action, qty) {
    if (!state.user) return; // Sécurité si user déconnecté
    const { error } = await supabaseClient.from('history').insert([{
        item_name: name,
        action: action,
        change_qty: qty,
        user_email: state.user.email,
        created_at: new Date().toISOString()
    }]);

    if (error) console.error("Erreur historique:", error);
}

export function processHistoryGroups(historyList) {
    // Filtrage
    const f = state.histFilter;
    const filtered = historyList.filter(h => {
        const d = new Date(h.created_at);
        // Filtre Année
        if (f.year && d.getFullYear().toString() !== f.year) return false;
        // Filtre Mois
        if (f.month && (d.getMonth() + 1).toString() !== f.month) return false;
        // Filtre Dates
        if (f.dateFrom && new Date(f.dateFrom) > d) return false;
        if (f.dateTo && new Date(f.dateTo) < d) return false;
        // Filtre Texte
        if (f.search) {
            const searchStr = (h.action + ' ' + (h.location || '') + ' ' + h.item_name).toLowerCase();
            if (!searchStr.includes(f.search.toLowerCase())) return false;
        }
        return true;
    });

    // Groupement
    const groups = {};
    filtered.forEach(h => {
        const dateKey = new Date(h.created_at).toLocaleDateString();
        const loc = h.location || '';
        // Normalisation des actions pour l'affichage groupé
        let displayAction = (h.action === 'Distribution' || h.action === 'Retour Distrib') ? 'Distribution' : h.action;

        const key = `${dateKey}_${displayAction}_${loc}`;
        if (!groups[key]) groups[key] = { date: dateKey, fullDate: h.created_at, action: displayAction, location: loc, items: [] };
        groups[key].items.push(h);
    });
    state.groupedHistory = Object.values(groups).sort((a, b) => new Date(b.fullDate) - new Date(a.fullDate));
}

export async function setHistFilter(key, val) {
    state.histFilter[key] = val;
    // On recalcule les groupes
    processHistoryGroups(state.history);
    // On met à jour uniquement la liste
    const container = document.getElementById('history-results-container');
    if (container) {
        const { getHistoryListHTML } = await import('../modules/history/history.view.js');
        container.innerHTML = getHistoryListHTML();
        createIcons({ icons }); // Version NPM
    }
}
