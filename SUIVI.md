# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-19 (réinitialisation du statut pour le cycle d'audit v2 harmonisé)  
Campagne audit accessibilité v2 démarrée le 2026-06-16

> La colonne **« Audité v2 »** suit le nouveau cycle d'audit harmonisé **PER + accessibilité** (arbitrage croisé, distinction drill / instance). Un **❌** signifie « pas encore repassé selon la nouvelle doctrine », et **non** « non conforme ». Les correctifs déjà présents dans les fichiers restent en place.

---

## Correctifs globaux

| Fichier | Modification |
|---------|-------------|
| `apps/feedbackUtils.js` | `launchConfetti()` : vérification `prefers-reduced-motion` ajoutée (bénéficie à toutes les apps) |
| `apps/app-base.css` | `.question-box` : font-size `clamp(17→18px)`, `line-height: 1.5` ; `.feedback` : font-size `clamp(16→18px)` ; `.verify-btn` + `.new-btn` : `min-height: 64px` ; bloc `prefers-reduced-motion` ajouté |
| `apps/app-base.css` (v2) | `.back-link` : `display:inline-flex`, `align-items:center`, `min-height:44px`, `:focus-visible` ; `.level-bar gap` 10→12px ; `.level-btn` : `min-width:44px`, `:focus-visible` (inactif/actif) ; `.verify-btn` + `.new-btn` : `min-width:64px`, `:focus-visible` ; transitions déplacées dans `(prefers-reduced-motion: no-preference)` (bénéficie aux 9 apps utilisant app-base.css) |
| `apps/_template.html` | `role="banner"` sur header ; `role="status" aria-live="polite" aria-atomic="true"` sur feedback ; `newBtn.focus()` dans `showFeedback` |

---

## État des apps

| Fichier | Titre | Fonctionne | Audité v2 | Notes d'audit v2 |
|---------|-------|------------|-----------|------------------|
| balance.html | La balance | ✅ | ❌ | |
| capacites.html | Qui contient le plus ? | ✅ | ❌ | |
| comparaison-nombres-c1.html | Le comparateur de nombres (3H-4H) | ✅ | ❌ | |
| comparaison-nombres.html | Comparaison de nombres | ✅ | ❌ | |
| decodi-comprehension.html | Compréhension DéCoDi | ✅ | ❌ | |
| decodi-dictee-c2.html | Dictée DéCoDi — Modules 11-15 | ✅ | ❌ | |
| decodi-dictee.html | Dictée DéCoDi — Modules 6-10 | ✅ | ❌ | |
| place-le-nombre-c1.html | Place le nombre (3H-4H) | ✅ | ❌ | |
| place-le-nombre-c2.html | Place le nombre (5H-6H) | ✅ | ❌ | |
| entrainement-ville.html | Entraînement — La ville | ✅ | ❌ | |
| itineraires-decris.html | Itinéraires — Décris le trajet | ✅ | ❌ | |
| itineraires.html | Itinéraires — Lis le trajet | ✅ | ❌ | |
| longueurs.html | Les longueurs — Comparer des longueurs | ✅ | ❌ | |
| saut-de-nombre.html | Le saut de nombre | ✅ | ❌ | |
| soustraction-colonne.html | Soustraction en colonne | ✅ | ❌ | |
| surfaces-c2.html | Les surfaces — Calculer des aires | ✅ | ❌ | |
| surfaces.html | Les surfaces — Comparer des aires | ✅ | ❌ | |
| valeur-position.html | Valeur de position | ✅ | ❌ | |
| vertical-calculation.html | Additions en colonne | ✅ | ❌ | |
| sujet-predicat-c2.html | Sujet et prédicat | ✅ | ❌ | |
