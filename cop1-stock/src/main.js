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
import { loadData } from './services/stock.js';
import { initRouter, setView } from './core/router.js';

// Views imports
import { renderLogin } from './modules/auth/login.view.js';
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
        } else {
            console.log('🔒 Utilisateur non connecté');
            renderLogin();
        }

        // Auth state listener
        supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log('🔄 Auth state change:', event);
            state.user = session?.user || null;
            if (state.user) loadData();
            else renderLogin();
        });

        // 4. Init router
        initRouter();
        const urlParams = new URLSearchParams(window.location.search);
        const viewParam = urlParams.get('view');
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
