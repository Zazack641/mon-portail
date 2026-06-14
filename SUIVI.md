# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-14

---

## Correctif global

| Fichier | Modification |
|---------|-------------|
| `apps/feedbackUtils.js` | `launchConfetti()` : vérification `prefers-reduced-motion` ajoutée (bénéficie à toutes les apps) |

---

## État des apps

| Fichier | Titre | Fonctionne | Conforme skills | Notes d'audit |
|---------|-------|------------|-----------------|---------------|
| balance.html | La balance | ✅ | ✅ | `role="banner"` ; level-bar `role="group"` + `aria-pressed` HTML + JS ; `aria-live` sur #feedback |
| capacites.html | Qui contient le plus ? | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback |
| comparaison-nombres-c1.html | Le comparateur de nombres (3H-4H) | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback |
| comparaison-nombres.html | Comparaison de nombres | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback |
| decodi-comprehension.html | Compréhension DéCoDi | ✅ | ✅ | `role="banner"` ; `role="status"` + `aria-atomic` sur #q-feedback ; `outline` visible sur `.opinion-zone textarea:focus` |
| decodi-dictee-c2.html | Dictée DéCoDi — Modules 11-15 | ✅ | ✅ | `role="banner"` ; `role="group"` sur #nav-bar (était `role="navigation"`) ; `aria-live` sur #feedback ; `outline` visible sur `.word-input:focus` et `.recopy-input:focus` |
| decodi-dictee.html | Dictée DéCoDi — Modules 6-10 | ✅ | ✅ | `outline` visible sur `.word-input:focus` et `.recopy-input:focus` ; `role="group"` sur #nav-bar |
| droite-graduee.html | La droite graduée | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback ; canvas clavier accessible (`role="slider"` + flèches ← →) |
| entrainement-ville.html | Entraînement — La ville | ✅ | ✅ | Couleurs hover `.primary-btn` et `.home-btn` corrigées (#8C4000 → #115C3A) |
| itineraires-decris.html | Itinéraires — Décris le trajet | ✅ | ✅ | `aria-live` sur #feedback |
| itineraires.html | Itinéraires — Lis le trajet | ✅ | ✅ | Animations dans `@media (prefers-reduced-motion: no-preference)` ; grille agrandie |
| longueurs.html | Les longueurs — Comparer des longueurs | ✅ | ✅ | `role="banner"` ; level-bar `role="group"` + `aria-pressed` HTML + JS ; `aria-live` sur #feedback |
| saut-de-nombre.html | Le saut de nombre | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback |
| soustraction-colonne.html | Soustraction en colonne | ✅ | ✅ | Title case corrigé : "Soustraction en colonne" (titre + h1) |
| surfaces-c2.html | Les surfaces — Calculer des aires | ✅ | ✅ | `aria-live` sur #feedback ; shape-items clavier accessibles (`role="button"` + `tabindex` + `keydown` + `aria-pressed`) |
| surfaces.html | Les surfaces — Comparer des aires | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback ; shape-items clavier accessibles |
| valeur-position.html | Valeur de position | ✅ | ✅ | `role="banner"` ; `aria-live` sur #feedback |
| vertical-calculation.html | Additions en colonne | ✅ | ✅ | Title case corrigé : "Additions en colonne" (titre + h1) |
