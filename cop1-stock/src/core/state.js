// ==================================================================================
// ÉTAT GLOBAL DE L'APPLICATION
// ==================================================================================

// État global de l'application
export const state = {
    user: null,
    items: [],
    history: [],
    groupedHistory: [],

    // Listes configurables (chargées depuis localStorage pour la persistance locale simple)
    distribLocations: [],
    collectLocations: [],
    foodProducts: [],
    hygieneProducts: [],
    clothingProducts: [],
    foodSubcats: [],
    hygieneSubcats: [],
    clothingSubcats: [],

    view: 'list', // list, operations, history
    filterMain: 'TOUS',
    searchTerm: '',

    // Mode Opérations
    opMode: null, // DISTRIB, COLLECTE, BA, DON, COMMANDE, PERTE
    distribMode: null, // (NULL, 'IN', 'OUT')
    opInfo: '',
    opCart: [],
    opDate: new Date().toISOString().split('T')[0],

    // Modales
    modalOpen: false,
    quickAddModalOpen: false,
    settingsModalOpen: false,

    // Edition
    editingItem: null,
    quickAddItem: null,
    newItem: { name: '', quantity: '', mainCategory: 'ALIMENTAIRE', remarks: '', minThreshold: 5 },

    // Auth
    isAuthMode: 'login',

    // Filtres Historique
    histFilter: {
        year: '',
        month: '', // '1' à '12'
        dateFrom: '',
        dateTo: '',
        search: ''
    }
};
