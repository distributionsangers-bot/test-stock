// ==================================================================================
// SERVICE OPÉRATIONS - VERSION NPM
// ==================================================================================

import { supabaseClient } from './supabase.js';
import { state } from '../core/state.js';
import { loadData } from './stock.js';
import { showToast } from './utils.js';

export async function setOpMode(m) {
    state.opMode = m;
    state.distribMode = null; // Réinitialise le sous-mode
    state.opCart = [];
    state.opInfo = '';
    const { renderApp } = await import('../modules/app.view.js');
    renderApp();
}

// Nouvelle fonction pour gérer le sous-choix
export async function setDistribMode(mode) {
    state.distribMode = mode;
    const { renderApp } = await import('../modules/app.view.js');
    renderApp();
}

export async function addOpLine() {
    // Type par défaut : Si distribMode existe (IN/OUT), on l'utilise. Sinon logique habituelle.
    let defaultType = 'IN';
    if (state.distribMode) defaultType = state.distribMode;
    else if (state.opMode === 'DISTRIB' || state.opMode === 'PERTE') defaultType = 'OUT';

    state.opCart.push({ id: Date.now(), mainCategory: 'ALIMENTAIRE', name: '', quantity: '', type: defaultType });
    const { renderApp } = await import('../modules/app.view.js');
    renderApp();
}

export async function removeOpLine(id) {
    state.opCart = state.opCart.filter(l => l.id !== id);
    const { renderApp } = await import('../modules/app.view.js');
    renderApp();
}

// On ajoute le paramètre 'skipRender' à la fin (false par défaut)
export async function updateOpLine(id, f, v, skipRender = false) {
    const l = state.opCart.find(x => x.id === id);
    if (l) {
        l[f] = f === 'quantity' ? Number(v) : v;
        // Si skipRender est vrai, on ne recharge pas l'affichage
        if (!skipRender) {
            const { renderApp } = await import('../modules/app.view.js');
            renderApp();
        }
    }
}

// --- VALIDATION DES OPÉRATIONS (MODE STRICT) ---
export async function validateOp() {
    if (state.opCart.length === 0) return showToast("Le panier est vide !", "warning");

    // --- NOUVEAU BLOC DE SÉCURITÉ ---
    // 1. On vérifie d'abord que TOUS les noms sont valides avant de faire quoi que ce soit
    // On construit la liste de tous les noms autorisés (Paramètres + Stock existant)
    const allowedList = [
        ...state.foodProducts,
        ...state.hygieneProducts,
        ...state.items.map(i => i.name) // On autorise aussi ce qui est déjà en stock (pour pouvoir sortir les vieux produits)
    ];

    for (const line of state.opCart) {
        // Si le nom tapé n'est pas EXACTEMENT dans la liste autorisée
        if (!allowedList.includes(line.name)) {
            showToast(`Produit inconnu : "${line.name}"`, "error");
            showToast("Veuillez l'ajouter dans les Paramètres d'abord.", "warning");
            return; // On arrête TOUT ici, rien n'est envoyé à la base de données
        }
    }
    // ---------------------------------

    // On bloque le bouton visuellement
    const btn = document.getElementById('btn-val-op');
    const oldText = btn.innerText;
    btn.innerText = "Validation...";
    btn.disabled = true;

    try {
        for (const line of state.opCart) {
            if (!line.name || !line.quantity) continue;

            const qty = Number(line.quantity);
            const changeQty = line.type === 'OUT' ? -qty : qty;

            // Recherche du produit existant
            const { data: existingItem, error: findError } = await supabaseClient
                .from('items')
                .select('*')
                .eq('name', line.name) // Ici on utilise .eq (strict) et non .ilike car on a validé le nom juste avant
                .eq('category', line.mainCategory)
                .maybeSingle();

            if (findError) throw findError;

            if (existingItem) {
                // Mise à jour stock existant
                const newStock = existingItem.quantity + changeQty;
                const { error: updateError } = await supabaseClient
                    .from('items')
                    .update({
                        quantity: Math.max(0, newStock),
                        updated_by: state.user.email
                    })
                    .eq('id', existingItem.id);
                if (updateError) throw updateError;
            } else {
                // Création nouveau produit (seulement si validé au début)
                // Note : Avec le blocage strict ci-dessus, on n'arrivera ici QUE si le produit 
                // est dans la liste des paramètres mais pas encore en stock (première entrée).
                const { error: insertError } = await supabaseClient
                    .from('items')
                    .insert([{
                        name: line.name,
                        category: line.mainCategory,
                        quantity: qty,
                        threshold: 5,
                        updated_by: state.user.email
                    }]);
                if (insertError) throw insertError;
            }

            // Historique
            let actionLabel = state.opMode;
            if (state.opMode === 'DISTRIB' && state.distribMode) {
                actionLabel = state.distribMode === 'OUT' ? 'Distribution' : 'Retour Distrib';
            }

            const { error: histError } = await supabaseClient.from('history').insert([{
                item_name: line.name,
                action: actionLabel,
                change_qty: changeQty,
                location: state.opInfo || '',
                user_email: state.user.email,
                created_at: new Date(state.opDate).toISOString()
            }]);

            if (histError) throw histError;
        }

        showToast("Opération validée avec succès !", "success");
        state.opCart = [];
        state.opInfo = '';
        setOpMode(null);
        await loadData();

    } catch (err) {
        console.error(err);
        showToast("Erreur technique : " + err.message, "error");
    } finally {
        if (btn) {
            btn.innerText = oldText;
            btn.disabled = false;
        }
    }
}
