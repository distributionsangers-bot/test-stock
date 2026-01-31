// ==================================================================================
// SERVICE SUPABASE - VERSION NPM
// ==================================================================================
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../config.js';

export let supabaseClient;

export function initSupabase() {
    if (SUPABASE_URL.includes("votre-url")) {
        console.error("SUPABASE_URL non configurée");
        return null;
    }
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
    return supabaseClient;
}
