# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-17 (audit capacites.html, comparaison-nombres-c1.html ; correctif global app-base.css v2)  
Campagne audit accessibilité v2 démarrée le 2026-06-16

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

| Fichier | Titre | Fonctionne | Audité v2 | Notes d'audit v2 | Notes v1 (archivées) |
|---------|-------|------------|-----------|------------------|----------------------|
| balance.html | La balance | ✅ | ✅ | Gap level-bar 10→12px, gap ctrl-btns 8→12px ; `min-width: 64px` sur verify/new/egal-btn ; back-link min-height 44px ; `.n3-count` et `.click-hint` contraste corrigé (#94A3B8→#4A5568/#475569) et font-size 13→15px ; `.n3-side-label` contraste corrigé (#64748B→#4A5568) ; `:focus-visible` ajouté ; `tabindex="-1"` sur feedback ; focus géré après réponse (newBtn.focus / feedbackEl.focus) | V1 : `role="banner"`, level-bar ARIA, `aria-live` ; V2 : `prefers-reduced-motion`, tailles boutons 64px, font 18px, message d'erreur avec action ("Enlève des cubes…") |
| capacites.html | Qui contient le plus ? | ✅ | ✅ | `level-bar gap` 10→12px ; `back-link` min-height 44px + display:inline-flex ; `level-btn` min-width 44px ; `container-item` min 48→64px×64px ; `.label` font-size 16→22px ; `.container-svg-wrap` bordure `#E2E8F0`→`#64748B` (contraste 1.2→4.75:1) ; `.feedback` line-height 1.5 ; `verify-btn/new-btn` min-width 64px ; `:focus-visible` sur tous les éléments ; transitions encapsulées dans `(prefers-reduced-motion: no-preference)` ; `data-focus-target` + focus sur premier container après DOM rebuild ; `newBtn.focus()` après validation ; indicateurs ✓/✗ textuels sur labels containers ; message d'erreur avec action ("Appuie sur Nouvel exercice") | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, feedback 18px, boutons 64px |
| comparaison-nombres-c1.html | Le comparateur de nombres (3H-4H) | ✅ | ✅ | `symbol-zone gap` 10→12px ; `symbol-btn` clamp min 56→64px ; transition + `:active transform` encapsulés dans `(prefers-reduced-motion: no-preference)` ; `legend-item font-size` 13→15px ; `:focus-visible` sur tous les éléments (overrides app-base.css) ; `back-link` min-height 44px ; `level-bar gap` 12px ; `level-btn/new-btn` min-width ; focus sur premier symbol-btn après DOM rebuild ; `newBtn.focus()` après validation ; indicateurs ✓/✗ sur boutons symboles ; message d'erreur avec action | V1 : `role="banner"`, `aria-live` ; V2 : couvert par app-base.css |
| comparaison-nombres.html | Comparaison de nombres | ✅ | ❌ | | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, symbol-btn 64px, feedback 18px, new-btn 64px |
| decodi-comprehension.html | Compréhension DéCoDi | ✅ | ❌ | | V1 : `role="banner"`, `aria-live`, `outline` textarea ; V2 : couvert par app-base.css |
| decodi-dictee-c2.html | Dictée DéCoDi — Modules 11-15 | ✅ | ❌ | | V1 : `role="banner"`, `role="group"` nav-bar, `aria-live`, `outline` ; V2 : couvert par app-base.css |
| decodi-dictee.html | Dictée DéCoDi — Modules 6-10 | ✅ | ❌ | | V1 : `outline`, `role="group"` nav-bar ; V2 : `prefers-reduced-motion` |
| place-le-nombre-c1.html | Place le nombre (3H-4H) | ✅ | ❌ | | Jumeau C1 de place-le-nombre-c2 (MSN 12, jusqu'à 100) ; mêmes garanties ARIA/contraste/tactiles |
| place-le-nombre-c2.html | Place le nombre (5H-6H) | ✅ | ❌ | | V1 : `role="banner"`, `aria-live`, canvas clavier (`role="slider"`) ; V2 : `prefers-reduced-motion`, question-box 18px/1.5, boutons 64px |
| entrainement-ville.html | Entraînement — La ville | ✅ | ❌ | | V1 : hover couleurs corrigées ; V2 : `prefers-reduced-motion` |
| itineraires-decris.html | Itinéraires — Décris le trajet | ✅ | ❌ | | V1 : `aria-live` ; V2 : `prefers-reduced-motion` |
| itineraires.html | Itinéraires — Lis le trajet | ✅ | ❌ | | Animations dans `@media (prefers-reduced-motion: no-preference)` déjà en place — aucun changement |
| longueurs.html | Les longueurs — Comparer des longueurs | ✅ | ❌ | | V1 : `role="banner"`, level-bar ARIA, `aria-live` ; V2 : `prefers-reduced-motion`, choice-btn 18px/64px, feedback 18px, boutons d'action 64px |
| saut-de-nombre.html | Le saut de nombre | ✅ | ❌ | | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, question-box 18px/1.5, boutons 64px |
| soustraction-colonne.html | Soustraction en colonne | ✅ | ❌ | | V1 : title case corrigé ; V2 : `prefers-reduced-motion` |
| surfaces-c2.html | Les surfaces — Calculer des aires | ✅ | ❌ | | V1 : `aria-live`, shape-items clavier ; V2 : couvert par app-base.css |
| surfaces.html | Les surfaces — Comparer des aires | ✅ | ❌ | | V1 : `role="banner"`, `aria-live`, shape-items clavier ; V2 : `prefers-reduced-motion`, feedback 18px, boutons 64px |
| valeur-position.html | Valeur de position | ✅ | ❌ | | V1 : `role="banner"`, `aria-live` ; V2 : `prefers-reduced-motion`, choice-btn 18px/64px, feedback 18px, new-btn 64px |
| vertical-calculation.html | Additions en colonne | ✅ | ❌ | | V1 : title case corrigé ; V2 : `prefers-reduced-motion`, message d'erreur avec référence visuelle ("cases en rouge") |
| sujet-predicat-c2.html | Sujet et prédicat | ✅ | ❌ | | Nouveau fichier — créé depuis `_template.html` ; audit accessibilité v2 à faire |
