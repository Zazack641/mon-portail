# Suivi des applications

Audit complet — accessibilité (WCAG 2.2 AA), design portail, pédagogie PER.  
Dernière mise à jour : 2026-06-20 (audit v2 : capacites.html)  
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
| capacites.html | Qui contient le plus ? | ✅ | ✅ | **Accessibilité :** contraste `back-link` relevé (0.85→0.92 sur header `#C0272D`, ~4,3→~5,5:1). RAS sur le reste — cibles tactiles conformes (récipients 64×64, verify/new 64×64, level-btn 48px, back-link 44px), accès clavier des récipients (`role="button"`/`tabindex`/`aria-label` + Entrée/Espace, le tap reste l'option principale), focus géré (`data-focus-target` après nouvel exercice, `newBtn.focus()` après validation), feedback `role="status" aria-live`, transitions sous `prefers-reduced-motion`. **Pédagogie :** RAS — feedbacks formatifs et design « conservation du volume » (`fillArea × taux`, formes contrastées) conservés intacts. **Forme :** `TYPE_TACHE = 'drill'` déclaré + `showFeedback` aligné sur le contrat canonique (comportement inchangé). — **À VALIDER PAR ISAAC (global) :** seuil accessibilité « 22px pour le texte interactif » non respecté (level-btn 15px, verify/new 18px, back-link 15px) ; non appliqué ici par cohérence avec le précédent balance.html (décision globale en attente). **À VALIDER PAR ISAAC (structure) :** l'app couvre deux groupes d'années (N1 = 1H-2H, N2 = 3H-4H) alors que la convention « une app = un groupe d'années » impose une app par groupe ; la carte porte `data-harmos="c1"` (badge « 1H–2H »). Faut-il scinder ? Non tranché (touche index.html + création de fichier, hors périmètre per-fichier). Variables `--color-units/tens/hundreds` non déclarées : capacités n'affiche pas de valeurs de position, palette non applicable. |
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
