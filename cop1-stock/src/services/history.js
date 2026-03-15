// ==================================================================================
// SERVICE HISTORIQUE - VERSION REFACTORISÉE
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';

/**
 * Enregistre une entrée dans l'historique
 */
export async function logHistory(name, action, qty) {
    if (!state.user) return;
    const { error } = await supabaseClient.from('history').insert([{
        item_name: name,
        action: action,
        change_qty: qty,
        user_email: state.user.email,
        created_at: new Date().toISOString()
    }]);

    if (error) console.error("Erreur historique:", error);
}

/**
 * Groupe les entrées d'historique par date/action/location
 * Ne fait PAS de filtrage - c'est la responsabilité de Supabase
 */
export function processHistoryGroups(historyList) {
    const groups = {};

    historyList.forEach(h => {
        const dateKey = new Date(h.created_at).toLocaleDateString();
        const loc = h.location || '';
        // Normalisation des actions pour l'affichage groupé
        const displayAction = (h.action === 'Distribution' || h.action === 'Retour Distrib') ? 'Distribution' : h.action;

        const key = `${dateKey}_${displayAction}_${loc}`;
        if (!groups[key]) {
            groups[key] = {
                date: dateKey,
                fullDate: h.created_at,
                action: displayAction,
                location: loc,
                items: []
            };
        }
        groups[key].items.push(h);
    });

    state.groupedHistory = Object.values(groups).sort((a, b) =>
        new Date(b.fullDate) - new Date(a.fullDate)
    );
}

/**
 * Récupère l'historique avec filtres côté Supabase
 * Logique de priorité : dateFrom/dateTo > year/month
 */
export async function getHistory(page = 1, limit = 20, filters = {}) {
    try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        let query = supabaseClient
            .from('history')
            .select('*', { count: 'exact' });

        // Filtre recherche texte
        if (filters.search && filters.search.trim()) {
            const searchTerm = filters.search.trim();
            query = query.or(`item_name.ilike.%${searchTerm}%,action.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%,user_email.ilike.%${searchTerm}%`);
        }

        // PRIORITÉ : Si dates précises sont définies, on les utilise EXCLUSIVEMENT
        const hasDateRange = filters.dateFrom || filters.dateTo;

        if (hasDateRange) {
            // Utiliser les dates précises uniquement
            if (filters.dateFrom) {
                query = query.gte('created_at', `${filters.dateFrom}T00:00:00`);
            }
            if (filters.dateTo) {
                query = query.lte('created_at', `${filters.dateTo}T23:59:59`);
            }
        } else {
            // Sinon, utiliser year/month
            if (filters.year && filters.month) {
                const m = filters.month.toString().padStart(2, '0');
                const lastDay = new Date(parseInt(filters.year), parseInt(filters.month), 0).getDate();
                query = query
                    .gte('created_at', `${filters.year}-${m}-01T00:00:00`)
                    .lte('created_at', `${filters.year}-${m}-${lastDay}T23:59:59`);
            } else if (filters.year) {
                query = query
                    .gte('created_at', `${filters.year}-01-01T00:00:00`)
                    .lte('created_at', `${filters.year}-12-31T23:59:59`);
            }
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

/**
 * Compte les filtres actifs pour l'indicateur visuel
 */
export function countActiveFilters(filters) {
    let count = 0;
    if (filters.search && filters.search.trim()) count++;
    if (filters.dateFrom) count++;
    if (filters.dateTo) count++;
    if (filters.year && !filters.dateFrom && !filters.dateTo) count++;
    if (filters.month && !filters.dateFrom && !filters.dateTo) count++;
    return count;
}

/**
 * Réinitialise tous les filtres
 */
export function resetHistFilters() {
    state.histFilter = {
        year: '',
        month: '',
        dateFrom: '',
        dateTo: '',
        search: ''
    };
}
