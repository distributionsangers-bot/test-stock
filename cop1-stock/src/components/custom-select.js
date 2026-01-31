// ==================================================================================
// COMPOSANT CUSTOM SELECT (AUTOCOMPLETE) - VERSION NPM
// ==================================================================================

import { state } from '../core/state.js';
import { normalizeText } from '../services/utils.js';

// 1. Ouvre la liste et gère le clic extérieur
export function openCustomSelect(id) {
    // Ferme toutes les autres listes d'abord
    document.querySelectorAll('.custom-dropdown-list').forEach(el => el.classList.add('hidden'));
    const list = document.getElementById(id);
    if (list) list.classList.remove('hidden');
}

// 2. Filtre les options pendant la frappe
export function filterCustomSelect(listId, text) {
    const list = document.getElementById(listId);
    if (!list) return;
    const options = list.querySelectorAll('div');
    const search = normalizeText(text);

    let count = 0;
    options.forEach(opt => {
        const val = normalizeText(opt.innerText);
        if (val.includes(search)) {
            opt.classList.remove('hidden');
            count++;
        } else {
            opt.classList.add('hidden');
        }
    });
}

// 3. Action quand on clique sur une option
export function selectCustomOption(listId, inputId, value, isOpLine = false, lineId = 0, isModal = false) {
    // 1. Mise à jour visuelle du champ input
    const input = document.getElementById(inputId);
    if (input) input.value = value;

    // 2. Mise à jour des données (State)
    if (isOpLine) {
        // Cas A : Ligne d'opération (Panier)
        if (window.updateOpLine) window.updateOpLine(lineId, 'name', value, true);
    } else if (isModal) {
        // Cas B : Modale d'ajout/modif
        if (window.updateModalData) {
            window.updateModalData('name', value);
        }
    } else {
        // Cas C : Lieu (Header)
        state.opInfo = value;
        if (window.renderApp) window.renderApp();
    }

    // 3. Fermeture de la liste
    const list = document.getElementById(listId);
    if (list) list.classList.add('hidden');
}

// 4. Initialisation des événements globaux
export function initCustomSelect() {
    // Fermeture automatique si on clique ailleurs
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select-container')) {
            document.querySelectorAll('.custom-dropdown-list').forEach(el => el.classList.add('hidden'));
        }
    });
}

// Expose les fonctions globalement pour les événements inline (onclick)
window.openCustomSelect = openCustomSelect;
window.filterCustomSelect = filterCustomSelect;
window.selectCustomOption = selectCustomOption;
