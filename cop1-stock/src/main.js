// ==================================================================================
// MAIN.JS - POINT D'ENTRÉE VITE APPLICATION (cop1-stock)
// ==================================================================================

import './style.css';
import { createIcons, icons } from 'lucide';

// Core imports
import { state } from './core/state.js';
import { initSupabase, supabaseClient } from './services/supabase.js';
import { SUPABASE_URL } from './config.js';
import { loadGlobalSettings } from './services/settings.js';
import { loadData, initRealtimeStock, stopRealtimeStock } from './services/stock.js';
import { initRouter, setView } from './core/router.js';
import { startInactivityMonitor, stopInactivityMonitor } from './services/inactivity.js';

// Views imports
import { renderLogin } from './modules/auth/login.view.js';
import { renderResetPassword } from './modules/auth/reset-password.view.js';
import { renderApp } from './modules/app.view.js';

// Custom select initialization
import './components/custom-select.js';

// Fonction pour afficher/masquer le loader global
function toggleLoader(show) {
    const loader = document.getElementById('global-loader');
    if (!loader) return;

    if (show) {
        loader.style.opacity = '1';
        loader.style.pointerEvents = 'auto';
    } else {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 500);
    }
}

// Initialisation de l'application
async function initApp() {
    toggleLoader(true);

    try {
        console.log('🚀 Stock COP1 - Initialisation Vite...');

        // ⚠️ CRITICAL: Check password recovery mode FIRST, before any Supabase init
        // This must happen before getSession() which would consume the token
        const urlHash = window.location.hash;
        const urlParams = new URLSearchParams(urlHash.substring(1)); // Remove # and parse
        const isRecoveryFromUrl = urlHash.includes('type=recovery') ||
            urlHash.includes('type=password_recovery') ||
            (urlParams.get('type') === 'recovery') ||
            (urlParams.get('access_token') && urlHash.includes('recovery'));

        if (isRecoveryFromUrl || state.isPasswordRecoveryMode) {
            // We're in password recovery mode - show reset password page standalone
            console.log('🔑 Password recovery mode detected from URL');
            state.isPasswordRecoveryMode = true;

            // Init Supabase first (needed for password update)
            if (!SUPABASE_URL.includes("votre-url")) {
                initSupabase();
            }

            renderResetPassword();
            toggleLoader(false);
            return; // Don't continue with normal flow - critical to stop here
        }

        // 1. Init Supabase
        if (SUPABASE_URL.includes("votre-url")) {
            toggleLoader(false);
            return renderLogin();
        }
        initSupabase();

        // 2. Charger les paramètres globaux
        await loadGlobalSettings();

        // 3. Vérif session
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            state.user = session.user;
            console.log('✅ Utilisateur connecté:', session.user.email);
            await loadData();
            // Démarrer l'écoute Realtime pour les mises à jour du stock en temps réel
            initRealtimeStock();
            // Start inactivity monitor for logged-in users
            startInactivityMonitor();
        } else {
            console.log('🔒 Utilisateur non connecté');
            renderLogin();
        }

        // Auth state listener (includes PASSWORD_RECOVERY detection)
        supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log('🔄 Auth state change:', event);

            // Handle password recovery
            if (event === 'PASSWORD_RECOVERY') {
                console.log('🔑 Password recovery detected, showing reset form...');
                state.isPasswordRecoveryMode = true;
                renderResetPassword();
                return;
            }

            // If we're in password recovery mode, don't redirect to app
            if (state.isPasswordRecoveryMode) {
                console.log('🔐 En mode récupération de mot de passe, pas de redirection');
                return;
            }

            state.user = session?.user || null;
            if (state.user) {
                loadData();
                initRealtimeStock();
                startInactivityMonitor();
            } else {
                stopRealtimeStock();
                stopInactivityMonitor();
                renderLogin();
            }
        });

        // 4. Init router
        initRouter();
        const viewUrlParams = new URLSearchParams(window.location.search);
        const viewParam = viewUrlParams.get('view');
        if (viewParam) state.view = viewParam;

        // 5. Init Lucide icons
        createIcons({ icons });

    } catch (err) {
        console.error("Init Error:", err);
        renderLogin();
    } finally {
        toggleLoader(false);
    }
}

// Global error handler
window.onerror = (msg, url, lineNo, columnNo, error) => {
    console.error('❌ Erreur globale:', { msg, url, lineNo, columnNo, error });
    return false;
};

// Expose global functions
window.renderApp = renderApp;
window.renderLogin = renderLogin;
window.setView = setView;
window.state = state;

// Start the application
window.onload = initApp;
