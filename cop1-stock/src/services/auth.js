// ==================================================================================
// SERVICE AUTHENTIFICATION - VERSION NPM LUCIDE
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';
import { ASSOCIATION_CODE } from '../config.js';
import { showToast } from './utils.js';
import { createIcons, icons } from 'lucide';

export async function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const code = document.getElementById('asso-code')?.value;

    const btn = document.getElementById('auth-btn');
    const oldHtml = btn.innerHTML;
    btn.innerHTML = '<div class="loader"></div>';

    try {
        if (state.isAuthMode === 'register') {
            if (code !== ASSOCIATION_CODE) throw new Error("Code incorrect");
            const { error } = await supabaseClient.auth.signUp({ email, password });
            if (error) throw error;
            showToast("Compte créé ! Connectez-vous.", "success");
            // On bascule automatiquement vers le login après inscription réussie
            await toggleAuthMode();
        } else {
            const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
            if (error) throw error;
            // Pas de toast ici car on va être redirigé vers l'app
        }
    } catch (err) {
        showToast(err.message, "error");
        btn.innerHTML = oldHtml; // On remet le bouton si erreur (pas besoin de re-render tout)
    }
}

export function togglePassword() {
    const input = document.getElementById('password');
    const icon = document.getElementById('pw-icon');

    // Si c'est caché, on montre. Sinon, on cache.
    if (input.type === 'password') {
        input.type = 'text';
        // On change l'icône (optionnel, mais sympa)
        icon.setAttribute('data-lucide', 'eye-off');
    } else {
        input.type = 'password';
        icon.setAttribute('data-lucide', 'eye');
    }
    createIcons({ icons }); // Version NPM
}

export async function toggleAuthMode() {
    state.isAuthMode = state.isAuthMode === 'login' ? 'register' : 'login';
    const { renderLogin } = await import('../modules/auth/login.view.js');
    renderLogin();
}

export async function logout() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        // Le changement d'état (onAuthStateChange) dans main.js gérera la redirection
    } catch (err) {
        console.error("Logout Error:", err);
        showToast("Erreur lors de la déconnexion", "error");
    }
}

export async function resetPassword(email) {
    try {
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin
        });
        if (error) throw error;
        showToast("Email de réinitialisation envoyé !", "success");
        return { error: null };
    } catch (err) {
        showToast(err.message, "error");
        return { error: err };
    }
}

// Expose globalement
window.logout = logout;
window.resetPassword = resetPassword;
