// ==================================================================================
// VUE OPÉRATIONS - VERSION NPM LUCIDE
// ==================================================================================

import { state } from '../../core/state.js';
import { getOpStyle } from '../../services/utils.js';
import { setOpMode, setDistribMode, addOpLine, removeOpLine, updateOpLine, validateOp } from '../../services/operations.js';
import { createIcons, icons } from 'lucide';

// Expose les fonctions globalement pour les événements inline
window.setOpMode = setOpMode;
window.setDistribMode = setDistribMode;
window.addOpLine = addOpLine;
window.removeOpLine = removeOpLine;
window.updateOpLine = updateOpLine;
window.validateOp = validateOp;

function getMainMenuHTML() {
    return `
        <div class="animate-fade-in pb-10 max-w-4xl mx-auto">
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 mb-6 shadow-2xl shadow-purple-500/20">
                <div class="relative text-white">
                    <h1 class="text-2xl font-black tracking-tight flex items-center gap-2">
                        <i data-lucide="arrow-right-left" class="w-7 h-7"></i> Opérations
                    </h1>
                    <p class="text-white/70 text-sm font-medium mt-1">Gérez les mouvements de stock</p>
                </div>
            </div>

            <button onclick="setOpMode('DISTRIB')" class="w-full bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-3xl flex items-center gap-5 shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all mb-4 group">
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                    <i data-lucide="shopping-bag" class="w-8 h-8"></i>
                </div>
                <div class="text-left text-white">
                    <span class="block text-2xl font-black uppercase">Distribution</span>
                    <span class="text-sm text-orange-100/80">Sortie & Retour de produits</span>
                </div>
            </button>

            <button onclick="setOpMode('COLLECTE')" class="w-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-5 rounded-2xl flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-all mb-4 group">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                </div>
                <div class="text-left text-white">
                    <span class="block text-xl font-bold">Collecte</span>
                    <span class="text-sm text-emerald-100/80">Récupération de dons</span>
                </div>
            </button>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button onclick="setOpMode('BA')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="store" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Banque Alim.</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('DON')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="heart" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Dons</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('COMMANDE')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="truck" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Commandes</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('PERTE')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="trash-2" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Perte</div>
                    <div class="text-[10px] text-slate-400">Cassé / Périmé</div>
                </button>
            </div>
        </div>`;
}

function getDistribMenuHTML() {
    return `
        <div class="animate-fade-in max-w-lg mx-auto">
            <div class="flex items-center gap-3 mb-6">
                <button onclick="setOpMode(null)" class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                    <i data-lucide="arrow-left" class="w-5 h-5 text-slate-600"></i>
                </button>
                <h2 class="text-xl font-black text-slate-900">Distribution</h2>
            </div>
            <div class="space-y-4">
                <button onclick="setDistribMode('OUT')" class="w-full bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-3xl flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all group">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                        <i data-lucide="log-out" class="w-8 h-8"></i>
                    </div>
                    <div class="text-left text-white">
                        <span class="block text-xl font-black uppercase">Sortie de Stock</span>
                        <span class="text-sm text-orange-100/80">Distribution aux bénéficiaires</span>
                    </div>
                </button>
                <button onclick="setDistribMode('IN')" class="w-full bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-3xl flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all group">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                        <i data-lucide="rotate-ccw" class="w-8 h-8"></i>
                    </div>
                    <div class="text-left text-white">
                        <span class="block text-xl font-black uppercase">Retour Stock</span>
                        <span class="text-sm text-blue-100/80">Réintégration fin distribution</span>
                    </div>
                </button>
            </div>
        </div>`;
}

function getCartFormHTML() {
    const style = getOpStyle(state.opMode);
    const colorMap = {
        orange: { gradient: 'from-orange-400 to-orange-600', border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-600', shadow: 'shadow-orange-500/20' },
        green: { gradient: 'from-emerald-400 to-emerald-600', border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-600', shadow: 'shadow-emerald-500/20' },
        blue: { gradient: 'from-blue-400 to-blue-600', border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-600', shadow: 'shadow-blue-500/20' },
        purple: { gradient: 'from-purple-400 to-purple-600', border: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-600', shadow: 'shadow-purple-500/20' },
        teal: { gradient: 'from-teal-400 to-teal-600', border: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-600', shadow: 'shadow-teal-500/20' },
        red: { gradient: 'from-red-400 to-red-600', border: 'border-red-400', bg: 'bg-red-50', text: 'text-red-600', shadow: 'shadow-red-500/20' },
        gray: { gradient: 'from-slate-400 to-slate-600', border: 'border-slate-400', bg: 'bg-slate-50', text: 'text-slate-600', shadow: 'shadow-slate-500/20' }
    };
    const c = colorMap[style.color] || colorMap.gray;

    const cartItems = state.opCart.map(line => {
        const isOut = line.type === 'OUT';
        return `<div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                    <select onchange="updateOpLine(${line.id},'mainCategory',this.value)" class="text-xs font-bold ${line.mainCategory === 'ALIMENTAIRE' ? 'bg-green-50 text-green-700' : 'bg-purple-50 text-purple-700'} border px-2 py-1 rounded-lg">
                        <option value="ALIMENTAIRE" ${line.mainCategory === 'ALIMENTAIRE' ? 'selected' : ''}>🍎 ALIM</option>
                        <option value="HYGIENE" ${line.mainCategory === 'HYGIENE' ? 'selected' : ''}>🧴 HYG</option>
                    </select>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-lg ${isOut ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}">${isOut ? '↑ SORTIE' : '↓ ENTRÉE'}</span>
                </div>
                <button onclick="removeOpLine(${line.id})" class="text-slate-300 hover:text-red-500 p-1"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
            <div class="flex gap-2">
                <input type="text" value="${line.name}" oninput="updateOpLine(${line.id},'name',this.value,true)" class="flex-1 p-3 bg-slate-50 rounded-xl border font-medium" placeholder="Nom du produit...">
                <input type="number" value="${line.quantity}" onchange="updateOpLine(${line.id},'quantity',this.value)" class="w-20 p-3 bg-slate-50 rounded-xl border text-center font-bold" placeholder="Qté">
            </div>
        </div>`;
    }).join('');

    const emptyCart = `<div class="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-300"><i data-lucide="package" class="w-7 h-7"></i></div>
        <p class="text-slate-400 font-medium">Panier vide</p>
    </div>`;

    const locInput = (state.opMode === 'DISTRIB' || state.opMode === 'COLLECTE') ?
        `<div class="relative"><i data-lucide="map-pin" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${c.text}"></i><input type="text" value="${state.opInfo}" oninput="state.opInfo=this.value" class="w-full pl-12 pr-4 py-3 ${c.bg} rounded-xl border-2 font-bold" placeholder="Lieu de l'opération..."></div>` :
        `<input type="text" value="${state.opInfo}" onchange="state.opInfo=this.value" class="w-full p-3 bg-slate-50 rounded-xl border font-medium" placeholder="Informations complémentaires...">`;

    return `<div class="animate-fade-in max-w-lg mx-auto pb-10">
        <div class="bg-white rounded-3xl shadow-lg ${c.shadow} border-t-4 ${c.border} p-5 mb-4">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center text-white shadow-lg"><i data-lucide="${style.icon}" class="w-6 h-6"></i></div>
                    <div><h2 class="font-black text-lg text-slate-900">${style.label}</h2><input type="date" value="${state.opDate}" onchange="state.opDate=this.value" class="text-xs text-slate-400 bg-transparent"></div>
                </div>
                <button onclick="setOpMode(null)" class="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center"><i data-lucide="x" class="w-5 h-5 text-slate-500"></i></button>
            </div>
            ${locInput}
        </div>
        <div class="space-y-3 mb-4">${state.opCart.length === 0 ? emptyCart : cartItems}</div>
        <button onclick="addOpLine()" class="w-full py-4 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl font-bold hover:bg-slate-50 mb-4 flex items-center justify-center gap-2"><i data-lucide="plus" class="w-5 h-5"></i> Ajouter un produit</button>
        <button id="btn-val-op" onclick="validateOp()" class="w-full py-4 bg-gradient-to-r ${c.gradient} text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="check-circle" class="w-5 h-5"></i> Valider l'opération</button>
    </div>`;
}

export function renderOps(div) {
    if (!state.opMode) {
        div.innerHTML = getMainMenuHTML();
    } else if (state.opMode === 'DISTRIB' && !state.distribMode) {
        div.innerHTML = getDistribMenuHTML();
    } else {
        div.innerHTML = getCartFormHTML();
    }
    createIcons({ icons });
}
