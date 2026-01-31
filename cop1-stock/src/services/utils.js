// ==================================================================================
// SERVICE UTILITAIRES (avec Toasts & Confirmations) - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../core/state.js';
import { createIcons, icons } from 'lucide';

// ============================================================
// TOASTS - Notifications visuelles
// ============================================================
export function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const styles = {
        success: { border: 'border-l-brand-500', icon: 'check-circle-2', iconColor: 'text-brand-500' },
        error: { border: 'border-l-red-500', icon: 'alert-circle', iconColor: 'text-red-500' },
        warning: { border: 'border-l-orange-400', icon: 'alert-triangle', iconColor: 'text-orange-500' },
        info: { border: 'border-l-blue-500', icon: 'info', iconColor: 'text-blue-500' }
    };

    const s = styles[type] || styles.success;

    const el = document.createElement('div');
    el.className = `bg-white text-slate-800 border-l-4 ${s.border} p-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-[-20px] opacity-0 mb-3 min-w-[280px] max-w-[90vw] pointer-events-auto`;

    el.innerHTML = `
        <i data-lucide="${s.icon}" class="w-5 h-5 ${s.iconColor} flex-shrink-0"></i>
        <span class="font-bold text-sm flex-1">${msg}</span>
        <button onclick="this.parentElement.remove()" class="text-slate-300 hover:text-slate-500 transition">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `;

    container.appendChild(el);
    createIcons({ icons });

    // Animation Entrée
    requestAnimationFrame(() => {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
    });

    // Suppression Auto après 4s
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        setTimeout(() => el.remove(), 300);
    }, 4000);
}

// ============================================================
// CONFIRMATION - Modale de confirmation Premium
// ============================================================
export function showConfirm(message, onConfirm, options = {}) {
    const modalId = 'custom-confirm-modal';
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const {
        title = 'Confirmation',
        confirmText = 'Confirmer',
        cancelText = 'Annuler',
        type = 'info' // 'info' (bleu) ou 'danger' (rouge)
    } = options;

    const isDanger = type === 'danger';
    const iconName = isDanger ? 'alert-triangle' : 'help-circle';
    const headerGradient = isDanger
        ? 'from-red-600 to-red-700'
        : 'from-slate-900 to-slate-800';
    const confirmBtnClass = isDanger
        ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-red-500/30'
        : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-brand-500/30';

    const el = document.createElement('div');
    el.id = modalId;
    el.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in';

    el.innerHTML = `
        <div class="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden animate-scale-in">
            <!-- Header -->
            <div class="bg-gradient-to-r ${headerGradient} p-5 relative">
                <div class="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] pointer-events-none"></div>
                <div class="relative z-10 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl ${isDanger ? 'bg-white/20' : 'bg-white/10'} flex items-center justify-center">
                        <i data-lucide="${iconName}" class="w-5 h-5 text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">${title}</h3>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-5 bg-slate-50">
                <p class="text-slate-600 text-sm font-medium">${message}</p>
            </div>
            
            <!-- Footer -->
            <div class="flex gap-3 p-4 bg-white border-t border-slate-100">
                <button id="confirm-cancel-btn" class="flex-1 px-4 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-sm transition">
                    ${cancelText}
                </button>
                <button id="confirm-ok-btn" class="flex-1 px-4 py-3 text-white ${confirmBtnClass} rounded-xl font-bold text-sm shadow-lg transition flex items-center justify-center gap-2">
                    <i data-lucide="${isDanger ? 'trash-2' : 'check'}" class="w-4 h-4"></i>
                    ${confirmText}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(el);
    createIcons({ icons, root: el });

    const close = () => {
        el.remove();
        document.removeEventListener('keydown', handleEsc);
    };

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            close();
            if (options.onCancel) options.onCancel();
        }
    };
    document.addEventListener('keydown', handleEsc);

    document.getElementById('confirm-cancel-btn').onclick = () => {
        close();
        if (options.onCancel) options.onCancel();
    };

    document.getElementById('confirm-ok-btn').onclick = () => {
        close();
        if (onConfirm) onConfirm();
    };
}

// ============================================================
// PROMPT - Modale de saisie Premium
// ============================================================
export function escapeHtml(text) {
    if (!text) return text;
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function showPrompt(message, onConfirm, options = {}) {
    const modalId = 'custom-prompt-modal';
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const {
        title = 'Saisie requise',
        confirmText = 'Valider',
        cancelText = 'Annuler',
        placeholder = '',
        defaultValue = '',
        inputType = 'text'
    } = options;

    const el = document.createElement('div');
    el.id = modalId;
    el.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in';

    el.innerHTML = `
        <div class="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden animate-scale-in">
            <!-- Header -->
            <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-5 relative">
                <div class="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] pointer-events-none"></div>
                <div class="relative z-10 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <i data-lucide="edit-3" class="w-5 h-5 text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">${title}</h3>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-5 bg-slate-50 space-y-4">
                <p class="text-slate-600 text-sm font-medium">${message}</p>
                <input type="${inputType}" id="prompt-input" value="${escapeHtml(defaultValue)}" 
                    class="w-full p-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none font-semibold text-slate-900 transition-all" 
                    placeholder="${placeholder}">
            </div>
            
            <!-- Footer -->
            <div class="flex gap-3 p-4 bg-white border-t border-slate-100">
                <button id="prompt-cancel-btn" class="flex-1 px-4 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-sm transition">
                    ${cancelText}
                </button>
                <button id="prompt-ok-btn" class="flex-1 px-4 py-3 text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 rounded-xl font-bold text-sm shadow-lg shadow-brand-500/30 transition flex items-center justify-center gap-2">
                    <i data-lucide="check" class="w-4 h-4"></i>
                    ${confirmText}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(el);
    createIcons({ icons, root: el });

    // Focus input
    setTimeout(() => {
        const input = document.getElementById('prompt-input');
        if (input) input.focus();
    }, 50);

    const close = () => {
        el.remove();
        document.removeEventListener('keydown', handleEsc);
    };

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            close();
            if (options.onCancel) options.onCancel();
        }
    };
    document.addEventListener('keydown', handleEsc);

    document.getElementById('prompt-cancel-btn').onclick = () => {
        close();
        if (options.onCancel) options.onCancel();
    };

    const handleConfirm = () => {
        const val = document.getElementById('prompt-input').value;
        close();
        if (onConfirm) onConfirm(val);
    };

    document.getElementById('prompt-ok-btn').onclick = handleConfirm;
    document.getElementById('prompt-input').onkeypress = (e) => {
        if (e.key === 'Enter') handleConfirm();
    };
}


// Expose globalement
window.showToast = showToast;
window.showConfirm = showConfirm;
window.showPrompt = showPrompt;


// ============================================================
// HELPERS VISUELS
// ============================================================
export function getOpStyle(action) {
    const map = {
        'Distribution': { color: 'orange', icon: 'shopping-bag', label: 'Distribution' },
        'Retour Distrib': { color: 'blue', icon: 'rotate-ccw', label: 'Retour Distribution' },
        'Collecte': { color: 'green', icon: 'check-circle', label: 'Collecte' },
        'BA': { color: 'blue', icon: 'store', label: 'Banque Alimentaire' },
        'DON': { color: 'purple', icon: 'heart', label: 'Dons' },
        'COMMANDE': { color: 'teal', icon: 'truck', label: 'Commande' },
        'PERTE': { color: 'red', icon: 'trash-2', label: 'Perte' },
        'default': { color: 'gray', icon: 'info', label: action }
    };

    if (state.opMode === 'DISTRIB' && state.distribMode === 'IN') return map['Retour Distrib'];
    if (state.opMode === 'DISTRIB' && state.distribMode === 'OUT') return map['Distribution'];

    if (action.includes('Distribution') || action === 'DISTRIB') return map['Distribution'];
    if (action.includes('Retour')) return map['Retour Distrib'];
    if (action === 'BA' || action.includes('Banque')) return map['BA'];
    if (action === 'DON' || action.includes('Don')) return map['DON'];
    if (action === 'COMMANDE' || action.includes('Commande')) return map['COMMANDE'];
    if (action === 'PERTE' || action.includes('Perte')) return map['PERTE'];
    if (action === 'COLLECTE' || action.includes('Collecte')) return map['Collecte'];

    return map['default'];
}

export function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// ============================================================
// EXPORT CSV
// ============================================================
export function downloadStockCSV() {
    const rows = state.items.map(i => [i.category, i.sub_category || '', i.name, i.quantity, i.threshold, i.remarks || ""]);
    generateCSV("stock.csv", ["Cat", "Sous-Cat", "Produit", "Qté", "Seuil", "Note"], rows);
    showToast("Export CSV téléchargé ✓", "success");
}

export function downloadHistoryCSV() {
    const rows = state.history.map(h => [new Date(h.created_at).toLocaleString(), h.action, h.location || "", h.item_name, h.change_qty, h.user_email]);
    generateCSV("historique.csv", ["Date", "Action", "Info/Lieu", "Produit", "Qté", "User"], rows);
    showToast("Export historique téléchargé ✓", "success");
}

export function generateCSV(filename, headers, rows) {
    const csv = [headers.join(";"), ...rows.map(e => e.map(c => `"${String(c).replace(/"/g, '""')}"`).join(";"))].join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' }));
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================================
// LUCIDE ICONS HELPER
// ============================================================
export function refreshIcons(root = document) {
    createIcons({ icons, root });
}
