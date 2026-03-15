-- ==================================================================================
-- CONFIGURATION REALTIME POUR LES TABLES ITEMS ET HISTORY
-- À exécuter dans Supabase SQL Editor
-- ==================================================================================

-- 🔴 IMPORTANT: Exécutez ces commandes une par une si vous avez des erreurs

-- 1. Ajouter la table 'items' à la publication Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.items;

-- 2. Ajouter la table 'history' à la publication Realtime  
ALTER PUBLICATION supabase_realtime ADD TABLE public.history;

-- 3. Vérification (optionnel): liste les tables dans la publication
SELECT tablename FROM pg_publication_tables WHERE pubname = 'supabase_realtime';

-- ⚠️ Si vous voyez une erreur "relation already member of publication"
-- c'est NORMAL - la table est déjà configurée ✅
