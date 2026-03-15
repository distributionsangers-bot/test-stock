// ==================================================================================
// VUE LOGIN - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../../core/state.js';
import { handleAuth, toggleAuthMode, togglePassword, resetPassword } from '../../services/auth.js';
import { showPrompt } from '../../services/utils.js';
import { LOGO_URL } from '../../config.js';
import { createIcons, icons } from 'lucide';

export function renderLogin() {
    const app = document.getElementById('app');
    const isRegister = state.isAuthMode === 'register';

    app.innerHTML = `
        <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-4">
             <!-- Background Decorations -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div class="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-blue-400/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div class="absolute top-[40%] -left-[10%] w-[60vw] h-[60vw] bg-brand-400/20 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 1s;"></div>
            </div>

            <!-- Card -->
            <div class="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 z-10 animate-fade-in">
                
                <!-- Header -->
                <div class="text-center mb-8"> 
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-50 to-white shadow-sm mb-4 border border-brand-100/50">
                        <img src="${LOGO_URL}" class="w-12 h-12 object-contain" alt="Logo">
                    </div>
                    <h1 class="text-2xl font-extrabold text-slate-800 tracking-tight">Stock COP1</h1>
                    <p class="text-slate-500 font-medium">Gestion des stocks et opérations</p>
                </div>

                <!-- Segmented Control -->
                <div class="bg-slate-100/80 p-1.5 rounded-2xl mb-8 flex relative">
                    <button onclick="window.switchAuth('login')" class="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${!isRegister ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}">Connexion</button>
                    <button onclick="window.switchAuth('register')" class="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isRegister ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}">Inscription</button>
                </div>

                <!-- Form -->
                <form id="auth-form" class="space-y-5">
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="mail" class="w-5 h-5"></i>
                            </div>
                            <input id="email" type="email" autocomplete="username" required 
                                class="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="exemple@email.com">
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex justify-between items-center ml-1">
                            <label class="text-xs font-bold text-slate-500 uppercase">Mot de passe</label>
                            ${!isRegister ? '<button type="button" id="btn-forgot-password" class="text-[10px] font-bold text-brand-600 hover:text-brand-700 hover:underline">Oublié ?</button>' : ''}
                        </div>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="lock" class="w-5 h-5"></i>
                            </div>
                            <input id="password" type="password" autocomplete="current-password" required 
                                class="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="••••••••">
                            <button type="button" id="pw-icon" onclick="window.togglePassword()" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors" tabindex="-1">
                                <i data-lucide="eye" class="w-5 h-5"></i>
                            </button>
                        </div>
                        
                        ${isRegister ? `
                        <!-- Password Strength Indicator -->
                        <div id="password-strength-container" class="hidden mt-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2.5 animate-fade-in">
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Force du mot de passe</span>
                                <span id="password-strength-label" class="text-[10px] font-bold uppercase tracking-wide text-slate-400">—</span>
                            </div>
                            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div id="password-strength-bar" class="h-full w-0 rounded-full transition-all duration-300 ease-out"></div>
                            </div>
                            <div class="grid grid-cols-2 gap-1.5 pt-1">
                                <div id="req-length" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>8 caractères min.</span>
                                </div>
                                <div id="req-upper" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 majuscule</span>
                                </div>
                                <div id="req-lower" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 minuscule</span>
                                </div>
                                <div id="req-number" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 chiffre</span>
                                </div>
                            </div>
                        </div>
                        ` : ''}
                    </div>

                    ${isRegister ? `
                    <div class="space-y-1.5 animate-slide-up-subtle">
                         <label class="text-xs font-bold text-slate-500 uppercase ml-1">Code Asso</label>
                         <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="key" class="w-5 h-5"></i>
                            </div>
                            <input id="asso-code" type="text" required 
                                class="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="Code Association">
                        </div>
                    </div>
                    ` : ''}
                    
                    <button id="auth-btn" type="submit" class="w-full py-4 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform">
                        ${isRegister ? 'Créer un compte' : 'Se connecter'}
                    </button>
                </form>

                <div class="pt-6 text-center flex justify-center gap-4 text-[10px] text-slate-400 font-medium">
                    <span>Mentions Légales</span> • 
                    <span>Confidentialité</span> • 
                    <span>v2.0 Premium</span>
                </div>
            </div>
        </div>
    `;

    // Rebind events
    const form = document.getElementById('auth-form');
    if (form) form.onsubmit = handleAuth;

    // Forgot password handler
    const forgotBtn = document.getElementById('btn-forgot-password');
    if (forgotBtn) {
        forgotBtn.addEventListener('click', handleForgotPassword);
    }

    // Globals for inline onclicks
    window.switchAuth = (mode) => {
        if (state.isAuthMode !== mode) toggleAuthMode();
    };
    window.togglePassword = togglePassword;

    // VERSION NPM
    createIcons({ icons });

    // Password strength validation (only in register mode)
    if (isRegister) {
        setupPasswordStrength();
    }
}

function setupPasswordStrength() {
    const passInput = document.getElementById('password');
    const strengthContainer = document.getElementById('password-strength-container');
    const strengthBar = document.getElementById('password-strength-bar');
    const strengthLabel = document.getElementById('password-strength-label');
    const reqLength = document.getElementById('req-length');
    const reqUpper = document.getElementById('req-upper');
    const reqLower = document.getElementById('req-lower');
    const reqNumber = document.getElementById('req-number');

    function updateRequirement(el, isValid) {
        if (!el) return;
        const existingIcon = el.querySelector('i, svg');

        if (isValid) {
            el.classList.remove('text-slate-400');
            el.classList.add('text-green-600');
            if (existingIcon) {
                existingIcon.outerHTML = '<i data-lucide="check-circle" class="w-3 h-3"></i>';
            }
        } else {
            el.classList.remove('text-green-600');
            el.classList.add('text-slate-400');
            if (existingIcon) {
                existingIcon.outerHTML = '<i data-lucide="circle" class="w-3 h-3"></i>';
            }
        }
    }

    function checkPasswordStrength(password) {
        if (!strengthBar || !strengthLabel) return null;

        const checks = {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password)
        };

        updateRequirement(reqLength, checks.length);
        updateRequirement(reqUpper, checks.upper);
        updateRequirement(reqLower, checks.lower);
        updateRequirement(reqNumber, checks.number);

        // Refresh icons
        createIcons({ icons, nameAttr: 'data-lucide', attrs: { class: 'w-3 h-3' } });

        const score = Object.values(checks).filter(Boolean).length;

        const configs = [
            { width: '0%', color: 'bg-slate-300', label: '—', labelColor: 'text-slate-400' },
            { width: '25%', color: 'bg-red-500', label: 'Faible', labelColor: 'text-red-500' },
            { width: '50%', color: 'bg-orange-500', label: 'Moyen', labelColor: 'text-orange-500' },
            { width: '75%', color: 'bg-yellow-500', label: 'Bon', labelColor: 'text-yellow-500' },
            { width: '100%', color: 'bg-green-500', label: 'Fort', labelColor: 'text-green-600' }
        ];

        const config = configs[score];
        strengthBar.className = `h-full rounded-full transition-all duration-300 ease-out ${config.color}`;
        strengthBar.style.width = config.width;
        strengthLabel.textContent = config.label;
        strengthLabel.className = `text-[10px] font-bold uppercase tracking-wide ${config.labelColor}`;

        return checks;
    }

    if (passInput && strengthContainer) {
        passInput.addEventListener('focus', () => {
            strengthContainer.classList.remove('hidden');
        });

        passInput.addEventListener('input', (e) => {
            checkPasswordStrength(e.target.value);
        });
    }

    // Store validation function globally for form submission check
    window.checkPasswordStrengthValid = () => {
        const password = passInput?.value || '';
        const checks = {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password)
        };
        return Object.values(checks).every(Boolean);
    };
}

function handleForgotPassword() {
    showPrompt("Entrez votre email pour réinitialiser le mot de passe :", async (email) => {
        if (!email) return;
        await resetPassword(email);
    }, {
        title: 'Mot de passe oublié',
        placeholder: 'Email',
        inputType: 'email',
        confirmText: 'Envoyer'
    });
}
