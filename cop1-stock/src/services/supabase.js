// ==================================================================================
// SERVICE SUPABASE - VERSION NPM AVEC REALTIME
// ==================================================================================
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../config.js';

export let supabaseClient;
let realtimeChannel = null;

export function initSupabase() {
    if (SUPABASE_URL.includes("votre-url")) {
        console.error("SUPABASE_URL non configurée");
        return null;
    }
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
    return supabaseClient;
}

/**
 * Configure l'écoute Realtime sur les tables 'items' et 'history' pour les mises à jour en temps réel
 * @param {Function} onItemInsert - Callback appelé lors d'un INSERT sur items
 * @param {Function} onItemUpdate - Callback appelé lors d'un UPDATE sur items
 * @param {Function} onItemDelete - Callback appelé lors d'un DELETE sur items
 * @param {Function} onHistoryInsert - Callback appelé lors d'un INSERT sur history (optionnel)
 */
export function setupRealtimeSubscription(onItemInsert, onItemUpdate, onItemDelete, onHistoryInsert = null) {
    if (!supabaseClient) {
        console.error("❌ Supabase client non initialisé");
        return null;
    }

    // Nettoyer la subscription existante si elle existe
    cleanupRealtimeSubscription();

    console.log("📡 Configuration de l'écoute Realtime sur les tables 'items' et 'history'...");

    realtimeChannel = supabaseClient
        .channel('stock-realtime')
        // Items - INSERT
        .on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'items' },
            (payload) => {
                console.log('📡 Realtime INSERT (items):', payload.new?.name);
                if (onItemInsert) onItemInsert(payload);
            }
        )
        // Items - UPDATE
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'items' },
            (payload) => {
                console.log('📡 Realtime UPDATE (items):', payload.new?.name);
                if (onItemUpdate) onItemUpdate(payload);
            }
        )
        // Items - DELETE
        .on(
            'postgres_changes',
            { event: 'DELETE', schema: 'public', table: 'items' },
            (payload) => {
                console.log('📡 Realtime DELETE (items):', payload.old?.name);
                if (onItemDelete) onItemDelete(payload);
            }
        )
        // History - INSERT (pour actualiser l'historique en temps réel)
        .on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'history' },
            (payload) => {
                console.log('📡 Realtime INSERT (history):', payload.new?.action);
                if (onHistoryInsert) onHistoryInsert(payload);
            }
        )
        .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('✅ Realtime connecté - Mises à jour du stock et historique en temps réel activées');
            } else if (status === 'CHANNEL_ERROR') {
                console.error('❌ Erreur de connexion Realtime');
            }
        });

    return realtimeChannel;
}

/**
 * Nettoie la subscription Realtime
 */
export function cleanupRealtimeSubscription() {
    if (realtimeChannel) {
        console.log("🔌 Déconnexion Realtime...");
        supabaseClient.removeChannel(realtimeChannel);
        realtimeChannel = null;
    }
}
