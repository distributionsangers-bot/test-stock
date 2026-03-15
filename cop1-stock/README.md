# 📦 COP1 Stock

Application de gestion des stocks et des opérations pour l'association COP1.

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Fonctionnalités

- 📊 **Tableau de bord** - Vue d'ensemble des stocks et statistiques
- 📦 **Gestion des stocks** - Inventaire complet des produits
- 🔄 **Opérations** - Suivi des entrées/sorties de marchandises
- 📍 **Emplacements** - Gestion des différents lieux de stockage
- 📜 **Historique** - Traçabilité complète des mouvements
- 👤 **Authentification** - Connexion sécurisée via Supabase

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/cop1-stock.git
cd cop1-stock

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## ⚙️ Configuration

Créez un fichier `.env` à la racine :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anon
```

## 🏗️ Build

```bash
npm run build
```

## 📁 Structure

```
cop1-stock/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── core/           # Configuration et état global
│   ├── modules/        # Vues et services par fonctionnalité
│   └── services/       # Services (auth, utils, supabase)
├── index.html
└── vite.config.js
```

## 🔧 Technologies

- **Frontend** : Vanilla JS + Vite
- **Styling** : TailwindCSS
- **Backend** : Supabase (Auth + Database)
- **Icons** : Lucide Icons
- **Hosting** : Cloudflare Pages

## 📄 Licence

Projet privé - COP1 Angers
