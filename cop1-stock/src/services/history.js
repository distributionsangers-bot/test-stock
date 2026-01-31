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
        // Redirige vers la nouvelle méthode de rendu qui gérera la pagination si nécessaire
        // Pour l'instant, on recharge juste la vue actuelle
        const { renderHist } = await import('../modules/history/history.view.js');
        // Note: renderHist is generic, we might need a specific refresh function
        // But for filter updates, we usually reset to page 1. 
        // We will handle this in the view layer calling setHistFilter.
        // Actually, setHistFilter is called by the view.

        // Let's NOT trigger a full render here, but dispatch an event or let the view handle it.
        // For now, let's just dispatch a custom event that the view can listen to, or simpler:
        // The view calls setHistFilter, then it should re-fetch data.
    }
}

export async function getHistory(page = 1, limit = 20, filters = {}) {
    try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        let query = supabaseClient
            .from('history')
            .select('*', { count: 'exact' });

        // Filtres
        if (filters.search) {
            query = query.or(`item_name.ilike.%${filters.search}%,action.ilike.%${filters.search}%,user_email.ilike.%${filters.search}%`);
        }

        // Date filters
        if (filters.dateFrom) query = query.gte('created_at', filters.dateFrom);
        if (filters.dateTo) query = query.lte('created_at', filters.dateTo);

        // Month/Year shortcut filters
        if (filters.year) {
            const startYear = `${filters.year}-01-01`;
            const endYear = `${filters.year}-12-31`;
            query = query.gte('created_at', startYear).lte('created_at', endYear);
        }

        if (filters.month && filters.year) {
            // Calculate start and end of month
            const m = filters.month.padStart(2, '0');
            const startDate = `${filters.year}-${m}-01`;
            // Get last day of month
            const lastDay = new Date(filters.year, filters.month, 0).getDate();
            const endDate = `${filters.year}-${m}-${lastDay}`;

            query = query.gte('created_at', startDate).lte('created_at', endDate);
        } else if (filters.month && !filters.year) {
            // If only month is selected, assume current year or handle differently? 
            // Usually UI enforces Year if Month is selected, or we defaults to current year.
            const currentYear = new Date().getFullYear();
            const m = filters.month.padStart(2, '0');
            const startDate = `${currentYear}-${m}-01`;
            const lastDay = new Date(currentYear, filters.month, 0).getDate();
            const endDate = `${currentYear}-${m}-${lastDay}`;
            query = query.gte('created_at', startDate).lte('created_at', endDate);
        }

        query = query
            .order('created_at', { ascending: false })
            .range(from, to);

        const { data, count, error } = await query;

        if (error) throw error;

        return { data, count, error: null };

    } catch (error) {
        console.error("Erreur chargement historique:", error);
        return { data: [], count: 0, error };
    }
}
