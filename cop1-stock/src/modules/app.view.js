// ==================================================================================
// VUE PRINCIPALE - LAYOUT APPLICATION (VERSION NPM LUCIDE)
// ==================================================================================

import { state } from '../core/state.js';
import { supabaseClient } from '../services/supabase.js';
import { setView } from '../core/router.js';
import { openSettingsModal, renderSettingsModal, closeSettingsModal } from './modals/settings-modal.view.js';
import { renderList } from './stock/stock.view.js';
import { renderOps } from './operations/operations.view.js';
import { renderHist } from './history/history.view.js';
import { renderModal, renderQuickAddModal, openModal } from './modals/item-modal.view.js';
import { createIcons, icons } from 'lucide';

// Import Layout Components
import { renderHeader, initHeader } from '../components/layout/header.js';
import { renderSidebar, initSidebar } from '../components/layout/sidebar.js';
import { renderMobileNav, initMobileNav } from '../components/layout/mobile-nav.js';

// Expose les fonctions globalement pour les événements inline
window.setView = setView;
window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.openModal = openModal;

export function renderApp() {
    // Si pas connecté, on arrête tout
    if (!state.user) return;

    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <div class="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
            
            <!-- DESKTOP SIDEBAR -->
            ${renderSidebar()}

            <div class="flex-1 flex flex-col h-full relative min-w-0 md:ml-72">

                <!-- MOBILE HEADER -->
                ${renderHeader()}

                <!-- MAIN CONTENT SLOT -->
                <main id="main-slot" class="flex-1 overflow-y-auto pt-20 md:pt-8 pb-32 md:pb-8 px-4 md:px-8 w-full scroll-smooth max-w-7xl mx-auto focus:outline-none" tabindex="-1">
                </main>

                <!-- MOBILE BOTTOM NAVIGATION BAR -->
                ${renderMobileNav()}

                <!-- FAB BUTTON (Stock view only) -->
                ${state.view === 'list' ? `
                <button onclick="openModal('add')" 
                    class="fixed bottom-24 right-5 md:bottom-10 md:right-10 bg-gradient-to-br from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-lg shadow-brand-500/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-40 border-4 border-white/20 group">
                    <i data-lucide="plus" class="w-7 h-7 group-hover:rotate-90 transition-transform duration-200"></i>
                </button>` : ''}

            </div>
        </div>`;

    // Initialize layout component events
    initSidebar();
    initMobileNav();
    initHeader();

    // Chargement de la vue active
    const slot = document.getElementById('main-slot');
    if (state.view === 'list') renderList(slot);
    else if (state.view === 'operations') renderOps(slot);
    else if (state.view === 'history') renderHist(slot);

    // Rendu des modales (cachées par défaut)
    renderModal();
    renderQuickAddModal();
    renderSettingsModal();

    // Expose supabaseClient et renderApp globalement
    window.supabaseClient = supabaseClient;
    window.renderApp = renderApp;

    // VERSION NPM LUCIDE
    createIcons({ icons });
}
