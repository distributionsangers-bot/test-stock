/**
 * ============================================
 * MOBILE NAVIGATION COMPONENT - Premium Bottom Bar (Stock)
 * VERSION NPM LUCIDE
 * ============================================
 */

import { state } from '../../core/state.js';
import { setView } from '../../core/router.js';
import { openSettingsModal } from '../../modules/modals/settings-modal.view.js';
import { showConfirm, showToast } from '../../services/utils.js';
import { createIcons, icons } from 'lucide';

const MOBILE_NAV_ITEMS = [
    { id: 'list', icon: 'box', label: 'Stock' },
    { id: 'operations', icon: 'arrow-right-left', label: 'Opérations' },
    { id: 'history', icon: 'clock', label: 'Historique' },
    { id: 'MENU', icon: 'menu', label: 'Menu' }
];

export function renderMobileNav() {
    const currentView = state.view;

    const navHtml = MOBILE_NAV_ITEMS.map(item => {
        if (item.id === 'MENU') {
            return renderNavItem(item, false, true);
        }
        const isActive = item.id === currentView;
        return renderNavItem(item, isActive, false);
    }).join('');

    return `
        <nav 
            id="mobile-nav" 
            class="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
            role="navigation"
            style="padding-bottom: max(env(safe-area-inset-bottom), 8px);"
        >
            <div class="flex justify-around items-stretch px-2">
                ${navHtml}
            </div>
        </nav>
    `;
}

function renderNavItem(item, isActive, isMenu) {
    const actionAttr = isMenu ? 'data-action="open-mobile-menu"' : `data-nav-view="${item.id}"`;

    return `
        <button 
            ${actionAttr}
            aria-label="${item.label}"
            aria-current="${isActive ? 'page' : 'false'}"
            class="nav-item relative flex flex-col items-center justify-center gap-0.5 py-2 flex-1 transition-all duration-200 ${isActive ? 'text-brand-600' : 'text-slate-400'}"
        >
            <!-- Animated Pill Indicator -->
            <div class="active-pill absolute top-0 w-10 h-1 bg-brand-600 rounded-full transition-all duration-300 ease-out origin-center ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}"></div>
            
            <div class="icon-container relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${isActive ? 'bg-brand-50' : 'bg-transparent'}">
                <i data-lucide="${item.icon}" class="w-6 h-6 transition-all duration-200 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}"></i>
            </div>
            
            <span class="text-[10px] font-semibold transition-colors duration-200">${item.label}</span>
        </button>
    `;
}

/**
 * Updates the active state of mobile navigation links
 */
export function updateActiveMobileNavLink(view) {
    const nav = document.getElementById('mobile-nav');
    if (!nav) return;

    const allButtons = nav.querySelectorAll('.nav-item');

    allButtons.forEach(btn => {
        let isActive = false;

        if (btn.hasAttribute('data-nav-view')) {
            isActive = btn.dataset.navView === view;
        }

        // Apply visual updates
        if (isActive) {
            btn.classList.remove('text-slate-400');
            btn.classList.add('text-brand-600');
            btn.setAttribute('aria-current', 'page');
        } else {
            btn.classList.remove('text-brand-600');
            btn.classList.add('text-slate-400');
            btn.setAttribute('aria-current', 'false');
        }

        // Update Pill
        const pill = btn.querySelector('.active-pill');
        if (pill) {
            if (isActive) {
                pill.classList.remove('scale-0', 'opacity-0');
                pill.classList.add('scale-100', 'opacity-100');
            } else {
                pill.classList.remove('scale-100', 'opacity-100');
                pill.classList.add('scale-0', 'opacity-0');
            }
        }

        // Update Icon Container
        const iconContainer = btn.querySelector('.icon-container');
        if (iconContainer) {
            if (isActive) {
                iconContainer.classList.remove('bg-transparent');
                iconContainer.classList.add('bg-brand-50');
            } else {
                iconContainer.classList.remove('bg-brand-50');
                iconContainer.classList.add('bg-transparent');
            }
        }
    });

    // Re-render Lucide icons - VERSION NPM
    createIcons({ icons });
}

export function initMobileNav() {
    const nav = document.getElementById('mobile-nav');
    if (!nav) return;

    // Navigation buttons
    nav.querySelectorAll('[data-nav-view]').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.navView;
            setView(view);
        });
    });

    // Menu button
    const btnMenu = nav.querySelector('[data-action="open-mobile-menu"]');
    if (btnMenu) {
        btnMenu.addEventListener('click', openMobileMenu);
    }

    // Header menu button (avatar)
    const headerMenuBtn = document.querySelector('header [data-action="open-mobile-menu"]');
    if (headerMenuBtn) {
        headerMenuBtn.addEventListener('click', openMobileMenu);
    }

    // Force render Lucide icons - VERSION NPM
    createIcons({ icons });
}

function openMobileMenu() {
    const email = state.user?.email || 'utilisateur@email.com';
    const initial = email[0]?.toUpperCase() || '?';

    const modal = document.createElement('div');
    modal.id = 'mobile-menu-modal';
    modal.className = 'fixed inset-0 bg-black/50 z-[100] flex flex-col justify-end backdrop-blur-sm animate-fade-in md:hidden';

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeMobileMenu();
    });

    modal.innerHTML = `
        <div class="bg-white rounded-t-[2rem] shadow-2xl animate-slide-up" style="max-height: 85vh; overflow-y: auto; padding-bottom: max(env(safe-area-inset-bottom), 16px);">
            <!-- Handle Bar -->
            <div class="flex justify-center pt-3 pb-1">
                <div class="w-12 h-1.5 bg-slate-200 rounded-full"></div>
            </div>
            
            <!-- User Card -->
            <div class="px-5 py-4">
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-100">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-800/30">
                        ${initial}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-slate-900 text-lg truncate">${email}</div>
                        <div class="text-sm text-slate-400 truncate">Gestionnaire Stock</div>
                    </div>
                </div>
            </div>
            
            <!-- Menu Grid -->
            <div class="px-5 pb-4">
                <div class="grid grid-cols-3 gap-3">
                    <button data-menu-action="navigate" data-menu-view="list" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
                            <i data-lucide="box" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Stock</span>
                    </button>
                    
                    <button data-menu-action="navigate" data-menu-view="operations" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
                            <i data-lucide="arrow-right-left" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Opérations</span>
                    </button>
                    
                    <button data-menu-action="navigate" data-menu-view="history" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                            <i data-lucide="clock" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Historique</span>
                    </button>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="px-5 pb-4 space-y-2">
                <!-- Paramètres -->
                <button data-menu-action="settings" class="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-150 transition-all active:scale-[0.98]">
                    <div class="w-11 h-11 rounded-xl bg-slate-500 flex items-center justify-center text-white shadow-lg">
                        <i data-lucide="settings" class="w-5 h-5"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="font-bold text-slate-700">Paramètres</div>
                        <div class="text-xs text-slate-400">Gérer les listes et sauvegardes</div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300"></i>
                </button>
                
                <!-- Déconnexion -->
                <button data-menu-action="logout" class="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100 transition-all active:scale-[0.98]">
                    <div class="w-11 h-11 rounded-xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/25">
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="font-bold text-red-700">Se déconnecter</div>
                        <div class="text-xs text-red-400">Quitter l'application</div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-red-300"></i>
                </button>
            </div>
            
            <!-- Close Button -->
            <div class="px-5 pb-2">
                <button data-menu-action="close" class="w-full py-3.5 bg-slate-100 font-bold text-slate-500 rounded-2xl hover:bg-slate-200 active:scale-[0.98] transition-all text-sm">
                    Fermer
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    createIcons({ icons, root: modal }); // VERSION NPM
    attachMenuEvents(modal);
}

function attachMenuEvents(modal) {
    modal.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-menu-action]');
        if (!btn) return;

        const action = btn.dataset.menuAction;

        switch (action) {
            case 'navigate':
                const view = btn.dataset.menuView;
                if (view) {
                    closeMobileMenu();
                    setView(view);
                }
                break;

            case 'settings':
                closeMobileMenu();
                openSettingsModal();
                break;

            case 'logout':
                closeMobileMenu();
                await handleLogout();
                break;

            case 'close':
                closeMobileMenu();
                break;
        }
    });
}

function closeMobileMenu() {
    const modal = document.getElementById('mobile-menu-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.bg-white')?.classList.add('translate-y-full');
        setTimeout(() => modal.remove(), 200);
    }
}

async function handleLogout() {
    showConfirm('Voulez-vous vous déconnecter ?', async () => {
        try {
            const { supabaseClient } = await import('../../services/supabase.js');
            await supabaseClient.auth.signOut();
            state.user = null;
            showToast('Déconnexion réussie');
            window.location.reload();
        } catch (error) {
            console.error('Logout error:', error);
            showToast('Erreur déconnexion', 'error');
        }
    }, { type: 'danger', confirmText: 'Déconnecter' });
}

export function cleanupMobileNav() {
    closeMobileMenu();
}
