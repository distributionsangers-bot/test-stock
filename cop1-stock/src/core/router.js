// ==================================================================================
// SERVICE ROUTER (NAVIGATION) - VERSION NPM
// ==================================================================================

import { state } from './state.js';
import { renderApp } from '../modules/app.view.js';
import { updateActiveNavLink } from '../components/layout/sidebar.js';

// --- NAVIGATION HISTORY API ---
export function setView(v, push = true) {
    state.view = v;
    // Mise à jour de l'URL et de l'historique navigateur
    if (push) {
        const url = new URL(window.location);
        url.searchParams.set('view', v);
        window.history.pushState({ view: v }, '', url);
    }
    renderApp();

    // Update Sidebar Active State
    updateActiveNavLink(v);
}

// Écouteur pour le bouton Retour/Suivant du navigateur
export function initRouter() {
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view) {
            setView(event.state.view, false);
            // Fermer les modales si on navigue en arrière
            state.modalOpen = false;
            state.quickAddModalOpen = false;
            state.settingsModalOpen = false;
            renderApp();
        }
    });
}
