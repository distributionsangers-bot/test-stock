/**
 * ============================================
 * HEADER COMPONENT - Premium Mobile Header (Stock)
 * VERSION NPM LUCIDE
 * ============================================
 */

import { LOGO_URL } from '../../config.js';
import { state } from '../../core/state.js';

/**
 * Renders the Premium Mobile Header
 */
export function renderHeader() {
    const email = state.user?.email || 'U';
    const initial = email[0].toUpperCase();

    return `
        <header class="md:hidden fixed top-0 left-0 right-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" style="padding-top: env(safe-area-inset-top);">
            <div class="h-16 w-full flex items-center justify-between px-4">
                <!-- Logo + Brand -->
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/20">
                        <img src="${LOGO_URL}" class="h-5 w-auto" alt="Logo">
                    </div>
                    <div class="flex items-baseline gap-0.5">
                        <span class="font-extrabold text-lg text-slate-900">Stock</span>
                        <span class="font-bold text-lg text-brand-600">COP1</span>
                    </div>
                </div>
                
                <!-- Profile Avatar -->
                <button 
                    data-action="open-mobile-menu"
                    aria-label="Menu" 
                    title="Menu"
                    class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                    ${initial}
                </button>
            </div>
        </header>
    `;
}

export function initHeader() {
    // Events handled by mobile-nav
}

export function cleanupHeader() {
    // Nothing to cleanup
}
