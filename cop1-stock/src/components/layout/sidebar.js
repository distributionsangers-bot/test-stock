/**
 * ============================================
 * SIDEBAR COMPONENT - Premium Desktop Navigation (Stock)
 * VERSION NPM LUCIDE
 * ============================================
 */

import { LOGO_URL } from '../../config.js';
import { state } from '../../core/state.js';
import { setView } from '../../core/router.js';
import { openSettingsModal } from '../../modules/modals/settings-modal.view.js';
import { showConfirm, showToast } from '../../services/utils.js';
import { createIcons, icons } from 'lucide';

/**
 * Configuration des menus de navigation Stock
 */
const NAV_ITEMS = [
    { id: 'list', icon: 'box', label: 'Stock', gradient: 'from-blue-500 to-indigo-600', iconBg: 'bg-blue-500', iconBgLight: 'bg-blue-50', iconText: 'text-blue-600' },
    { id: 'operations', icon: 'arrow-right-left', label: 'Opérations', gradient: 'from-emerald-500 to-teal-600', iconBg: 'bg-emerald-500', iconBgLight: 'bg-emerald-50', iconText: 'text-emerald-600' },
    { id: 'history', icon: 'clock', label: 'Historique', gradient: 'from-violet-500 to-purple-600', iconBg: 'bg-violet-500', iconBgLight: 'bg-violet-50', iconText: 'text-violet-600' }
];

/**
 * Renders the Premium Sidebar component
 */
export function renderSidebar() {
    const email = state.user?.email || 'utilisateur@email.com';
    const initial = email[0]?.toUpperCase() || '?';
    const currentView = state.view;

    // Generate nav items HTML
    const navItemsHtml = NAV_ITEMS.map(item => {
        const isActive = item.id === currentView;
        const activeClass = isActive
            ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg shadow-brand-500/25`
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900';

        const iconBgClass = isActive
            ? 'bg-white/20'
            : `${item.iconBgLight} group-hover:bg-white group-hover:shadow-sm`;

        const iconColorClass = isActive ? 'text-white' : item.iconText;

        return `
            <button 
                data-nav-view="${item.id}" 
                aria-label="${item.label}"
                aria-current="${isActive ? 'page' : 'false'}"
                class="nav-link group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${activeClass}"
            >
                <div class="relative flex items-center justify-center w-9 h-9 rounded-lg ${iconBgClass} transition-all duration-200">
                    <i data-lucide="${item.icon}" class="w-[18px] h-[18px] ${iconColorClass}"></i>
                </div>
                <span class="flex-1 ${isActive ? 'font-semibold' : ''}">${item.label}</span>
                ${isActive ? '<div class="w-1.5 h-1.5 rounded-full bg-white/80"></div>' : ''}
            </button>
        `;
    }).join('');

    return `
        <aside id="sidebar" class="hidden md:flex w-72 flex-col fixed inset-y-0 left-0 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 z-50 flex-shrink-0 h-full shadow-xl shadow-slate-200/50">
            <!-- Header avec Logo -->
            <div class="h-20 flex items-center gap-3 px-6 flex-shrink-0 border-b border-slate-100/50">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <img src="${LOGO_URL}" class="h-6 w-auto" alt="Logo COP1">
                </div>
                <div>
                    <span class="font-extrabold text-xl text-slate-900">Stock</span>
                    <span class="font-bold text-xl text-brand-600"> COP1</span>
                </div>
            </div>
            
            <!-- User Card -->
            <div class="px-4 py-4 border-b border-slate-100/50">
                <div class="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/50">
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/25">
                        ${initial}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-slate-900 text-sm truncate">${email}</div>
                        <div class="text-xs text-slate-400 truncate">Gestionnaire Stock</div>
                    </div>
                </div>
            </div>
            
            <!-- Navigation -->
            <nav 
                id="sidebar-nav" 
                class="flex-1 px-3 space-y-1 py-4 overflow-y-auto no-scrollbar"
                role="navigation"
                aria-label="Navigation principale"
            >
                ${navItemsHtml}
            </nav>
            
            <!-- Footer avec Paramètres & Déconnexion -->
            <div class="p-4 flex-shrink-0 border-t border-slate-100/50 space-y-2">
                <button 
                    data-action="open-settings"
                    aria-label="Paramètres"
                    class="group flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 w-full p-3 rounded-xl transition-all duration-200"
                >
                    <div class="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
                        <i data-lucide="settings" class="w-4 h-4"></i>
                    </div>
                    <span>Paramètres</span>
                </button>
                <button 
                    data-action="logout"
                    aria-label="Se déconnecter"
                    class="group flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 w-full p-3 rounded-xl transition-all duration-200"
                >
                    <div class="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                        <i data-lucide="log-out" class="w-4 h-4 group-hover:text-red-500 transition-colors"></i>
                    </div>
                    <span>Déconnexion</span>
                </button>
            </div>
        </aside>
    `;
}

/**
 * Updates the active state of sidebar navigation links
 */
export function updateActiveNavLink(view) {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    const allButtons = nav.querySelectorAll('[data-nav-view]');

    allButtons.forEach(btn => {
        const btnView = btn.dataset.navView;
        const isActive = btnView === view;

        // Get the nav item config
        const navItem = NAV_ITEMS.find(item => item.id === btnView);
        if (!navItem) return;

        const gradientColors = navItem.gradient.split(' ');

        // --- 1. Reset everything to Inactive state ---
        btn.classList.remove('bg-gradient-to-r', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
        btn.classList.remove(...gradientColors);

        btn.classList.add('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
        btn.setAttribute('aria-current', 'false');

        const iconContainer = btn.querySelector('div');
        if (iconContainer) {
            iconContainer.classList.remove('bg-white/20');
            iconContainer.classList.add(navItem.iconBgLight, 'group-hover:bg-white', 'group-hover:shadow-sm');
        }

        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.remove('text-white');
            icon.classList.add(navItem.iconText);
        }

        const label = btn.querySelector('span');
        if (label) label.classList.remove('font-semibold');

        // Remove active dot
        const activeDot = btn.querySelector('.bg-white\\/80');
        if (activeDot) activeDot.remove();


        // --- 2. Apply Active state if needed ---
        if (isActive) {
            btn.classList.remove('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
            btn.classList.add('bg-gradient-to-r', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
            btn.classList.add(...gradientColors);

            btn.setAttribute('aria-current', 'page');

            if (iconContainer) {
                iconContainer.classList.remove(navItem.iconBgLight, 'group-hover:bg-white', 'group-hover:shadow-sm');
                iconContainer.classList.add('bg-white/20');
            }

            if (icon) {
                icon.classList.remove(navItem.iconText);
                icon.classList.add('text-white');
            }

            if (label) label.classList.add('font-semibold');

            // Add the white dot
            const dot = document.createElement('div');
            dot.className = 'w-1.5 h-1.5 rounded-full bg-white/80';
            btn.appendChild(dot);
        }
    });

    // Re-render Lucide icons - VERSION NPM
    createIcons({ icons });
}

/**
 * Initialise les événements de la sidebar
 */
export function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // Navigation buttons
    sidebar.querySelectorAll('[data-nav-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const view = btn.dataset.navView;
            setView(view);
        });
    });

    // Settings button
    const btnSettings = sidebar.querySelector('[data-action="open-settings"]');
    if (btnSettings) {
        btnSettings.addEventListener('click', openSettingsModal);
    }

    // Logout button
    const btnLogout = sidebar.querySelector('[data-action="logout"]');
    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogout);
    }

    // Force render Lucide icons in sidebar - VERSION NPM
    createIcons({ icons });
}

/**
 * Gère la déconnexion
 */
async function handleLogout() {
    showConfirm("Voulez-vous vraiment vous déconnecter ?", async () => {
        try {
            const { supabaseClient } = await import('../../services/supabase.js');
            await supabaseClient.auth.signOut();
            state.user = null;
            showToast('Déconnexion réussie');
            window.location.reload();
        } catch (error) {
            console.error('❌ Erreur déconnexion:', error);
            window.location.reload();
        }
    }, { confirmText: 'Se déconnecter', type: 'danger' });
}

/**
 * Cleanup
 */
export function cleanupSidebar() {
    // Events will be cleaned up on re-render
}
