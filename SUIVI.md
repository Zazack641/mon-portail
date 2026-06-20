# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-20 (audit v2 + scission : capacites.html → capacites-1h2h.html / capacites-3h4h.html)  
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
| balance.html | La balance | ✅ | ✅ | **Accessibilité :** focus replacé sur la consigne après « Nouvel exercice » (le bouton se masquait en gardant le focus) ; accès clavier des plateaux N1/N2 (tabindex/role/aria-label + activation Entrée/Espace, le tap reste l'option principale) ; contraste `back-link` relevé (0.85→0.92, ~4,3→~5,5:1) ; `click-hint` 15→16px. **Pédagogie :** RAS — feedbacks formatifs et retry N3 conservés intacts. **Forme :** `TYPE_TACHE` déclaré (table par niveau : N1/N2 `drill`, N3 `instance`) documentant le comportement existant. — **À VALIDER PAR ISAAC (global) :** seuil accessibilité « 22px pour les éléments interactifs » non respecté par les boutons (level-btn 15px, verify/new 18px) ; correctif global (app-base.css + toutes apps), non appliqué ici. Variables `--color-units/tens/hundreds` non déclarées : balance n'affiche pas de valeurs de position, palette jugée non applicable. |
| capacites-1h2h.html | Qui contient le plus ? (1H-2H) | ✅ | ✅ | **Issu de la scission de `capacites.html`** (validée par Isaac : « une app = un groupe d'années »). Cible **1H-2H**. N1 = 2 récipients même famille · N2 = 3 récipients même famille → comparaison du **niveau d'eau visible**, sans piège « conservation du volume » (trop précoce à cet âge). **Accessibilité :** contraste `back-link` 0.85→0.92 (~4,3→~5,5:1) ; cibles tactiles, accès clavier des récipients, focus, feedback `role="status"`, `prefers-reduced-motion` déjà conformes. **Pédagogie :** feedbacks formatifs et rendu canvas conservés intacts. **Forme :** `TYPE_TACHE='drill'` + `showFeedback` canonique. — **À VALIDER PAR ISAAC (global) :** seuil 22px texte interactif (level-btn 15px, verify/new 18px) reporté — décision globale en attente (cf. balance.html). `data-harmos="c1"` conservé sur la carte car c'est la valeur testée par le filtre cycle (le groupe d'années est porté par le badge `1H–2H`). |
| capacites-3h4h.html | Qui contient le plus ? (3H-4H) | ✅ | ✅ | **Issu de la scission de `capacites.html`.** Cible **3H-4H**. N1 = 3 récipients formes mixtes · N2 = 4 récipients, écarts resserrés (`minVisVolRatio` 0.08) → piège « **conservation du volume** » assumé (le plus haut ne contient pas toujours le plus d'eau). **Accessibilité :** contraste `back-link` 0.85→0.92 ; reste conforme (idem ci-dessus). **Pédagogie :** feedbacks formatifs et rendu canvas conservés intacts. **Forme :** `TYPE_TACHE='drill'` + `showFeedback` canonique. — **À VALIDER PAR ISAAC (global) :** idem seuil 22px reporté. `data-harmos="c1"` conservé (valeur du filtre cycle ; groupe porté par le badge `3H–4H`). |
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
