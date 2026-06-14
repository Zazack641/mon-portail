# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-14

---

## Correctifs globaux

| Fichier | Modification |
|---------|-------------|
| `apps/feedbackUtils.js` | `launchConfetti()` : vérification `prefers-reduced-motion` ajoutée (bénéficie à toutes les apps) |
| `apps/app-base.css` | `.question-box` : font-size `clamp(17→18px)`, `line-height: 1.5` ; `.feedback` : font-size `clamp(16→18px)` ; `.verify-btn` + `.new-btn` : `min-height: 64px` ; bloc `prefers-reduced-motion` ajouté |

---

## État des apps

| Fichier | Titre | Fonctionne | Conforme skills | Notes d'audit |
|---------|-------|------------|-----------------|---------------|
| balance.html | La balance | ✅ | ✅ | V1 : `role="banner"`, level-bar ARIA, `aria-live` ; V2 : `prefers-reduced-motion`, tailles boutons 64px, font 18px, message d'erreur avec action ("Enlève des cubes…") |
| capacites.html | Qui contient le plus ? | ✅ | ✅ | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, feedback 18px, boutons 64px |
| comparaison-nombres-c1.html | Le comparateur de nombres (3H-4H) | ✅ | ✅ | V1 : `role="banner"`, `aria-live` ; V2 : couvert par app-base.css |
| comparaison-nombres.html | Comparaison de nombres | ✅ | ✅ | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, symbol-btn 64px, feedback 18px, new-btn 64px |
| decodi-comprehension.html | Compréhension DéCoDi | ✅ | ✅ | V1 : `role="banner"`, `aria-live`, `outline` textarea ; V2 : couvert par app-base.css |
| decodi-dictee-c2.html | Dictée DéCoDi — Modules 11-15 | ✅ | ✅ | V1 : `role="banner"`, `role="group"` nav-bar, `aria-live`, `outline` ; V2 : couvert par app-base.css |
| decodi-dictee.html | Dictée DéCoDi — Modules 6-10 | ✅ | ✅ | V1 : `outline`, `role="group"` nav-bar ; V2 : `prefers-reduced-motion` |
| droite-graduee.html | La droite graduée | ✅ | ✅ | V1 : `role="banner"`, `aria-live`, canvas clavier (`role="slider"`) ; V2 : `prefers-reduced-motion`, question-box 18px/1.5, boutons 64px |
| entrainement-ville.html | Entraînement — La ville | ✅ | ✅ | V1 : hover couleurs corrigées ; V2 : `prefers-reduced-motion` |
| itineraires-decris.html | Itinéraires — Décris le trajet | ✅ | ✅ | V1 : `aria-live` ; V2 : `prefers-reduced-motion` |
| itineraires.html | Itinéraires — Lis le trajet | ✅ | ✅ | Animations dans `@media (prefers-reduced-motion: no-preference)` déjà en place — aucun changement |
| longueurs.html | Les longueurs — Comparer des longueurs | ✅ | ✅ | V1 : `role="banner"`, level-bar ARIA, `aria-live` ; V2 : `prefers-reduced-motion`, choice-btn 18px/64px, feedback 18px, boutons d'action 64px |
| saut-de-nombre.html | Le saut de nombre | ✅ | ✅ | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, question-box 18px/1.5, boutons 64px |
| soustraction-colonne.html | Soustraction en colonne | ✅ | ✅ | V1 : title case corrigé ; V2 : `prefers-reduced-motion` |
| surfaces-c2.html | Les surfaces — Calculer des aires | ✅ | ✅ | V1 : `aria-live`, shape-items clavier ; V2 : couvert par app-base.css |
| surfaces.html | Les surfaces — Comparer des aires | ✅ | ✅ | V1 : `role="banner"`, `aria-live`, shape-items clavier ; V2 : `prefers-reduced-motion`, feedback 18px, boutons 64px |
| valeur-position.html | Valeur de position | ✅ | ✅ | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, choice-btn 18px/64px, feedback 18px, new-btn 64px |
| vertical-calculation.html | Additions en colonne | ✅ | ✅ | V1 : title case corrigé ; V2 : `prefers-reduced-motion`, message d'erreur avec référence visuelle ("cases en rouge") |
