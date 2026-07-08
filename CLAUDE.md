# CLAUDE.md — Portail pédagogique « Mes outils pour apprendre »

## ⛔ Interdictions absolues

Ces règles s'appliquent à chaque tâche, sans exception.

1. Ne jamais copier une app existante comme base de travail — toujours partir de `apps/_template.html`.
2. Ne jamais redéfinir inline ce qui est fourni par `app-base.css` ou `appUtils.js`.
3. Ne jamais inventer de conventions de couleur — utiliser `var(--color-units)`, `var(--color-tens)`, `var(--color-hundreds)`.
4. Ne jamais appliquer le title case anglais aux titres français.
5. Ne jamais modifier les IDs JS critiques (`#search-input`, `#app-grid`, etc.) ni les attributs `data-*` des cartes.
6. Ne jamais ajouter d'émoji dans le `<h1>` d'une app — le domaine est porté par la couleur du header (`--app-accent`), pas par une icône.

---

## Convention de nommage des apps

Tout nouveau fichier app doit respecter ces règles :

- Nom en français, kebab-case, sans accents : `comparaison-nombres-3h4h.html`
- Suffixe de **groupe d'années** obligatoire quand l'app cible un groupe précis — il encode le groupe d'années, **jamais le cycle** :
  - `-1h2h.html` / `-3h4h.html` pour le Cycle 1 (1H–4H)
  - `-5h6h.html` / `-7h8h.html` pour le Cycle 2 (5H–8H)
- Ne jamais utiliser `-c1`/`-c2` comme suffixe de fichier : deux apps peuvent partager le même cycle tout en ciblant des groupes d'années différents (ex. `capacites-1h2h.html` et `capacites-3h4h.html`, toutes deux Cycle 1), qu'un suffixe de cycle ne pourrait pas distinguer. Le cycle reste porté par `data-harmos` (`c1`/`c2`), le critère du filtre du portail.
- Pas de suffixe uniquement si l'app couvre les deux cycles
- Un fichier par objectif PER par groupe d'années — jamais un seul fichier pour deux objectifs différents

Exemples corrects : `comparaison-nombres-3h4h.html`, `decodi-dictee-5h6h.html`, `surfaces-5h6h.html`
Exemples incorrects : `comparaison-nombres-c1.html` (suffixe de cycle, ambigu), `comparaison-nombres.html` (groupe ambigu), `mathApp.html` (anglais, camelCase)

---

## Objectif du site

Portail web monopage pour élèves du primaire, conçu pour **iPad tactile** (et responsive jusqu'au desktop).  
Chaque carte lance une application pédagogique externe. Le portail lui-même ne contient pas d'exercices : il est uniquement un annuaire filtrable.

Référentiel pédagogique : **cycles HarmoS** (système scolaire romand/suisse).

- **Cycle 1** : années 1H–4H (≈ 4–8 ans)  
- **Cycle 2** : années 5H–8H (≈ 8–12 ans)

---

## Structure du projet

```
mon-portail/
├── index.html                        ← fichier principal (tout-en-un : HTML + CSS + JS)
└── Mes outils pour apprendre_files/ ← assets locaux (polices Google Fonts en cache)
```

Pas de build, pas de framework, pas de dépendances npm. HTML/CSS/JS vanilla pur.  
Les URLs des applications sont pour l'instant des placeholders `file:///apps/…` marqués `<!-- ADD APP URL HERE -->`.

---

## Les 16 activités

### Mathématiques — Grandeurs et mesures (9 activités)

| # | Titre | Cycle | Thème | data-domain | data-cycle | URL placeholder |
|---|-------|-------|-------|-------------|------------|-----------------|
| 1 | La plus grande surface | C1 | Grandeurs et mesures | math | c1 | `file:///apps/area-comparison` |
| 2 | La plus grande surface (avancé) | C2 | Grandeurs et mesures | math | c2 | `file:///apps/area-comparison-advanced` |
| 3 | Qui contient le plus ? | C1 | Grandeurs et mesures | math | c1 | `file:///apps/capacity-comparison` |
| 4 | Comparaison de capacités (avancé) | C2 | Grandeurs et mesures | math | c2 | `file:///apps/capacity-comparison-advanced` |
| 5 | Le plus long | C1 | Grandeurs et mesures | math | c1 | `file:///apps/length-comparison` |
| 6 | Le plus long (avancé) | C1 | Grandeurs et mesures | math | c1 | `file:///apps/length-comparison-advanced` |
| 7 | Le plus lourd | C1 | Grandeurs et mesures | math | c1 | `file:///apps/mass-comparison` |
| 8 | La balance (simple) | C1 | Grandeurs et mesures | math | c1 | `file:///apps/mass-comparison-simple` |
| 9 | La balance (avancé) | C2 | Grandeurs et mesures | math | c2 | `file:///apps/mass-comparison-advanced` |

### Mathématiques — Nombres & Opérations (5 activités)

| # | Titre | Cycle | Thème | data-domain | data-cycle | URL placeholder |
|---|-------|-------|-------|-------------|------------|-----------------|
| 10 | Nombres Flèches | C2 | Nombres | math | c2 | `file:///apps/arrow-numbers` |
| 11 | Le comparateur de nombres | C2 | Nombres | math | c2 | `file:///apps/number-comparison` |
| 12 | Le Grand Saut | C2 | Nombres | math | c2 | `file:///apps/number-jump` |
| 13 | L'extracteur | C2 | Nombres | math | c2 | `file:///apps/tens-extractor` |
| 14 | Calcul en Colonne | C2 | Opérations | math | c2 | `file:///apps/vertical-calculation` |

### Français (2 activités)

| # | Titre | Cycle | Thème | data-domain | data-cycle | URL placeholder |
|---|-------|-------|-------|-------------|------------|-----------------|
| 15 | Compréhension de lecture | C2 | Compréhension | fr | c2 | `file:///apps/reading-comprehension` |
| 16 | Vocabulaire | C1 | Langue | fr | c1 | `file:///apps/vocabulary` |

### Ajouter une nouvelle activité

**Étape 1 — Créer le fichier de l'app**

Copier [`apps/_template.html`](apps/_template.html) sous le nom de la nouvelle app et suivre les instructions `TODO` inline. Ne jamais partir d'une app existante comme base : le squelette est la référence canonique (classes, IDs, structure JS, ordre des scripts).

Le template référence automatiquement trois fichiers partagés :

| Fichier | Rôle |
|---------|------|
| [`apps/app-base.css`](apps/app-base.css) | Reset, header, level-bar, question-box, feedback, boutons d'action, variables CSS couleurs (dont `--app-accent`/`--app-accent-dark`/`--app-tint-bg`/`--app-tint-fg`, à surcharger par domaine — voir « Variables CSS des apps par domaine » plus bas) |
| [`apps/appUtils.js`](apps/appUtils.js) | `randInt`, `randBetween`, `shuffle`, `pick`, `colorForRank` + boucle de tabulation Tab/Shift+Tab automatique, voir `skills/accessibilite/SKILL.md` |
| [`apps/feedbackUtils.js`](apps/feedbackUtils.js) | `playCorrect`, `playIncorrect`, `launchConfetti` |

**Ces fichiers ne doivent pas être ajoutés aux apps existantes** (elles embarquent leurs propres styles et utilitaires inline).  
Dans les nouvelles apps, **ne pas redéfinir inline** ce qui est déjà fourni par `app-base.css` ou `appUtils.js` — ajouter uniquement les styles et fonctions spécifiques à l'activité.

Règles à ne pas oublier :
- `appUtils.js` se charge **avant** le script de l'app ; `feedbackUtils.js` se charge **après**, juste avant `</body>`
- `playCorrect()` + `launchConfetti()` sur bonne réponse ; `playIncorrect()` seul sur mauvaise
- Le changement de niveau appelle `newExercise()` qui doit remettre à zéro tout l'état
- `aria-pressed` mis à jour dynamiquement sur chaque `.level-btn`

**Étape 2 — Ajouter la carte dans `index.html`**

Copier un bloc `<article class="app-card" …>` existant et renseigner :
- `data-domain` : `"math"` ou `"fr"`
- `data-cycle` : `"c1"` ou `"c2"`
- `data-keywords` : mots-clés de recherche supplémentaires (minuscules, séparés par des espaces)
- `data-per` : code objectif PER ciblé par l'app (ex. `"MSN 11"`, `"MSN 21"`). Obligatoire pour les apps maths. Consulter `docs/per/per-msn.md` pour trouver le bon code.
- `href` du `.launch-btn` : URL réelle de l'application
- Classe du bouton : `.launch-btn` (math, bleu marine) ou `.launch-btn.fr` (français, vert)
- `style="animation-delay: NNNms;"` : incrémenter de 30ms par rapport à la carte précédente

---

## Branches et couleurs PER

Les couleurs suivent la charte officielle CIIP du Plan d'études romand.
Chaque branche appartient à un domaine PER parent.

### Domaine LANGUES — jaune-ocre

| Branche  | Header / bouton | Fond badge | Texte badge | Point filtre |
|----------|-----------------|------------|-------------|--------------|
| Français | `#7A6200`       | `#FBF5D6`  | `#7A6200`   | `#B8960C`    |
| Allemand | `#4F6320`       | `#F5F0D0`  | `#6B5800`   | `#A08510`    |
| Anglais  | `#8C4A10`       | `#F0ECC8`  | `#5C4D00`   | `#8C7515`    |

> **Mise à jour 08.07.2026 :** Allemand (`#6B5800` → `#4F6320` olive) et Anglais (`#5C4D00` → `#8C4A10` bronze-ambré) s'écartent volontairement du jaune-brun du français, trop proche en bandeau plein — validé le 08.07.2026. Seul le "Header / bouton" change ici ; fond/texte badge et point filtre restent inchangés pour l'instant dans cette table (portail `index.html`, non encore migré). Pour les apps, voir la table complète ci-dessous.

> **Note contraste :** les couleurs "Header / bouton" sont choisies pour garantir un rapport ≥ 4,5:1 avec le texte blanc (WCAG AA). Les nuances plus claires (colonne "Point filtre") ne conviennent qu'aux éléments décoratifs (dot 8px) sur fond blanc — elles ne peuvent pas servir de fond à du texte blanc.

### Domaine MSN — rouge

| Branche               | Header / bouton | Fond badge | Texte badge |
|-----------------------|-----------------|------------|-------------|
| Mathématiques         | `#C0272D`       | `#FDECEA`  | `#8B0000`   |
| Sciences de la nature | `#A02030`       | `#F8E4E4`  | `#700018`   |

### Domaine SHS — vert foncé

| Branche   | Header / bouton | Fond badge | Texte badge |
|-----------|-----------------|------------|-------------|
| Géographie | `#1A6B4A`      | `#E6F2ED`  | `#0D4A30`   |
| Histoire   | `#1A5C5C`      | `#E0EEEE`  | `#0D3D3D`   |

### Variables CSS des apps par domaine (design « Couleur franche »)

Depuis la migration « Couleur franche », le header de chaque app (et ses éléments teintés : pilules de niveau, boutons d'action) n'utilise plus un bleu marine unique mais la couleur de son domaine, via 4 variables CSS surchargées dans le `:root` de chaque app (déclarées par défaut sur le neutre dans `apps/app-base.css`, voir `--app-header-bg: var(--app-accent)`) :

| Domaine | `--app-accent` (header/boutons) | `--app-accent-dark` (hover) | `--app-tint-bg` (pilules/badges) | `--app-tint-fg` (texte sur tint) |
|---|---|---|---|---|
| Mathématiques | `#C0272D` | `#A01F23` | `#FDECEA` | `#8B0000` |
| Français | `#7A6200` | `#5C4A00` | `#FBF5D6` | `#7A6200` |
| Allemand | `#4F6320` | `#3D4D16` | `#EEF3DC` | `#3A4A12` |
| Anglais | `#8C4A10` | `#6E3A0C` | `#F7EAD9` | `#6E3A0C` |
| Sciences de la nature | `#A02030` | `#801828` | `#F8E4E4` | `#700018` |
| Géographie | `#1A6B4A` | `#145438` | `#E6F2ED` | `#0D4A30` |
| Histoire | `#1A5C5C` | `#144646` | `#E0EEEE` | `#0D3D3D` |
| Cycles (générique) | `#0F7860` | `#0A5343` | `#E4F2EE` | `#0A5343` |
| Neutre (défaut `app-base.css`) | `#14202E` | `#0B141F` | `#EEF2F7` | `#33415A` |

Tous ces couples texte/fond tiennent AA (la plupart AAA) : blanc sur accent ≥ 4,9:1, tint-fg sur tint-bg ≥ 7:1. Les pilules de niveau (`.level-btn`) sont teintées `--app-tint-bg`/`--app-tint-fg` au repos et passent en `--app-accent` (fond plein, texte blanc) à l'état actif.

### Valeurs `data-*` des cartes

| Branche               | `data-domain`  |
|-----------------------|----------------|
| Français              | `"francais"`   |
| Allemand              | `"allemand"`   |
| Anglais               | `"anglais"`    |
| Mathématiques         | `"maths"`      |
| Sciences de la nature | `"sciences"`   |
| Géographie            | `"geo"`        |
| Histoire              | `"histoire"`   |

- **`data-harmos`** : niveau HarmoS de l'activité — valeurs possibles : `"1H-2H"`, `"3H-4H"`, `"5H-6H"`, `"7H-8H"`
- **`data-per`** : code(s) objectif PER (ex. `"MSN 14"`, `"L1 16"`, `"SHS 11"`)

### MSN 15 / MSN 25 (Modélisation) — jamais autonomes

La **modélisation** ne se travaille pas pour elle-même : elle se réalise **à travers** un objectif concret et emprunte sa progression.

- MSN 15 (C1) se travaille à travers MSN 11, 12, 13 ou 14.
- MSN 25 (C2) se travaille à travers MSN 21, 22, 23 ou 24.

Donc : **ne jamais créer une app dont l'objectif principal est MSN 15 ou MSN 25 seul.** Une app de modélisation porte **deux codes PER** — le concret puis le transversal — séparés par une espace dans `data-per`, et **deux badges** `.badge-per` dans la carte.

```html
<article class="app-card" ... data-per="MSN 13 MSN 15" ...>
  ...
  <span class="badge badge-per">MSN 13</span>
  <span class="badge badge-per">MSN 15</span>
```

---

## Conventions de design

### Typographie

| Usage | Police | Graisse |
|-------|--------|---------|
| Titres (h1, h2 cartes, boutons) | **Baloo 2** | 600–800 |
| Corps de texte, filtres, descriptions | **Source Sans 3** | 400–700 |

Chargées depuis Google Fonts (également en cache local dans `_files/`). Baloo 2 remplace Nunito depuis la migration « Couleur franche » (08.07.2026) ; poids maximum utilisé : 800 (jamais 900). Les `h1` d'app n'affichent plus d'émoji — voir interdiction absolue #6.

Pour le design des apps pédagogiques (typographie incluse), la source est `skills/design-portail/SKILL.md` ; les seuils tactiles et de texte des apps relèvent de `skills/accessibilite/SKILL.md`.

### Palette de couleurs

| Rôle | Valeur |
|------|--------|
| Fond de page | `#E9EDF4` (`#F0F4F8` avant la migration « Couleur franche ») |
| Texte principal | `#1A2535` |
| Header du portail / filtre « Toutes les branches » | `#14202E` (`#1A3A5C` avant la migration — voir couleur « Neutre » dans la table des variables d'apps) |
| Filtre actif domaine | couleur du domaine (ex. maths `#C0272D`, français `#7A6200`) |
| Filtre actif cycle | `#0F7860` |
| Bouton Français | `#0F7860` |
| Accent math (badge bg) | `#EBF3FC` |
| Accent math (badge text) | `#1A5FA8` |
| Accent math (point filtre) | `#3482D2` |
| Accent fr (badge bg) | `#E6F5F0` |
| Accent fr (badge text) | `#0A6048` |
| Accent fr (point filtre) | `#1D9E75` |
| Badge Cycle 1 (bg / text) | `#FEF3E2` / `#8A4E00` |
| Badge Cycle 2 (bg / text) | `#F0EAFF` / `#5B2D9E` |
| Badge thème (bg / text) | `#F1F5F9` / `#475569` |
| Bordures | `#E2E8F0` |
| Texte secondaire / placeholder | `#94A3B8` |

### Rayons de bordure

| Élément | Valeur |
|---------|--------|
| Cartes | `18px` |
| Icônes carrées | `14px` |
| Bouton « Lancer » (cartes) | `16px` (`12px` avant la migration « Couleur franche ») |
| Recherche | `12px` (inchangé) |
| Filtres / badges | `999px` (pilule) |

Pour les apps pédagogiques (`.verify-btn`, `.new-btn` dans `apps/app-base.css`), depuis la migration « Couleur franche » : rayon `16px` (au lieu de `12px`), hauteur minimale `68px` (au lieu de `64px`). Les pilules de niveau (`.level-btn`) restent en `999px`, désormais teintées par domaine (voir « Variables CSS des apps par domaine »).

### Tailles tactiles minimum (iPad)

**Ces valeurs concernent l'interface du portail `index.html` (filtres, recherche, bouton « Lancer » des cartes) — pas les apps pédagogiques.** Pour les apps, les seuils tactiles, de taille de texte, de contraste et de focus sont définis dans `skills/accessibilite/SKILL.md`, qui fait foi.

| Élément (portail `index.html`) | Taille min |
|---------|-----------|
| Boutons filtres | `min-height: 56px` (toutes tailles d'écran, depuis la migration « Couleur franche » ; `36px`/`40px` mobile/tablette avant) |
| Recherche | `min-height: 56px` |
| Bouton « Lancer » | `min-height: 68px` (`padding: 14px` avant la migration) |

Tous les éléments interactifs du portail ont `touch-action: manipulation` et `-webkit-appearance: none`.

### Grille responsive

| Breakpoint | Colonnes |
|-----------|---------|
| < 768px | `minmax(280px, 1fr)` |
| ≥ 768px | `minmax(300px, 1fr)` |
| ≥ 1024px | `minmax(320px, 1fr)` |

---

## Logique des filtres (à ne pas casser)

Les trois filtres sont **cumulatifs (ET logique)** — ils opèrent simultanément :

```js
const domainOk = activeDomain === 'all' || card.dataset.domain === activeDomain;
const cycleOk  = activeCycle  === 'all' || card.dataset.cycle  === activeCycle;
const searchOk = !query || keywords.includes(query);
const show = domainOk && cycleOk && searchOk;
```

La recherche textuelle scrute : `data-keywords` + titre de la carte + description.

Le compteur de résultats (`#result-count`) est mis à jour à chaque filtre et gère correctement le singulier/pluriel français.

Les délais d'animation se recalculent dynamiquement (`visible * 30ms`) pour que les cartes filtrées s'animent dans l'ordre.

---

## Accessibilité WCAG AA (à ne pas casser)

| Élément | Attributs présents |
|---------|-------------------|
| `<header>` | `role="banner"` |
| `<nav>` filtres | `aria-label="Filtres et recherche"` |
| Groupe domaine | `role="group"` + `aria-label` |
| Groupe cycle | `role="group"` + `aria-label` |
| Boutons filtres | `aria-pressed="true/false"` (mis à jour dynamiquement) |
| Champ recherche | `aria-label="Rechercher une activité"` |
| Compteur résultats | `aria-live="polite"` + `aria-atomic="true"` |
| Message 0 résultat | `role="status"` |
| Icône loupe | `aria-hidden="true"` |

Ne jamais supprimer ces attributs. Les mettre à jour dynamiquement via JS si l'état change.

---

## Convention des couleurs de valeurs de position (apps maths)

**Quand colorier (règle de jugement).** Colorier les rangs uniquement lorsque **la valeur de position est l'objet d'apprentissage** de l'app (numération, décomposition, complément à la dizaine/centaine, calcul en colonne…). S'en abstenir lorsque les nombres ne sont que des **quantités-support** d'une autre tâche (ex. choisir l'opération qui modélise une situation) : y colorier chaque chiffre concurrencerait le point d'attention unique exigé par l'accessibilité. En cas de conflit, l'accessibilité (« un seul point d'attention ») prime sur cette convention de design.

Quand le coloriage s'applique, toutes les applications mathématiques qui affichent des valeurs de position (unités, dizaines, centaines…) doivent respecter cette palette :

| Rang | Couleur | Hex |
|------|---------|-----|
| Unités | Bleu | `#3B7DD8` |
| Dizaines | Rouge | `#D64045` |
| Centaines | Vert | `#3A9E6F` |
| Milliers | Bleu | `#3B7DD8` (cycle recommence) |
| Dizaines de milliers | Rouge | `#D64045` |
| Centaines de milliers | Vert | `#3A9E6F` |

Le cycle bleu → rouge → vert se répète indéfiniment vers les grands rangs.

### Variables CSS de valeur de position

Ces trois variables sont **déjà déclarées dans `apps/app-base.css`** :

```css
--color-units:    #3B7DD8; /* unités       — bleu  */
--color-tens:     #D64045; /* dizaines     — rouge */
--color-hundreds: #3A9E6F; /* centaines    — vert  */
```

Toute app maths qui lie `app-base.css` en hérite automatiquement — **ne pas les redéclarer dans `:root`**. Une redéclaration n'est nécessaire que pour **surcharger** ces valeurs par une palette différente (cas non encore rencontré).

Utiliser `var(--color-units)` etc. dans tout le CSS de l'app — jamais les valeurs hex en dur. Cela garantit qu'un futur changement de palette se propage partout en une seule modification.

**Règle de correspondance rang → variable :**

```js
const PLACE_COLORS = ['--color-units', '--color-tens', '--color-hundreds'];
// rang 0 = unités, rang 1 = dizaines, rang 2 = centaines, rang 3 = unités de milliers…
function colorForRank(rank) {
  return `var(${PLACE_COLORS[rank % 3]})`;
}
```

---

## Feedback audio-visuel standardisé

Toutes les applications partagent le module [`apps/feedbackUtils.js`](apps/feedbackUtils.js) qui expose trois fonctions globales.

### Intégration dans chaque app

**1. Inclure le script** juste avant `</body>` :

```html
<script src="feedbackUtils.js"></script>
</body>
```

**2. Appeler les fonctions** depuis les gestionnaires d'événements existants — jamais au chargement :

```js
// Bonne réponse
playCorrect();    // accord Do-Mi-Sol ascendant, ~0,55s
launchConfetti(); // 60 particules, canvas temporaire, durée 1,8s

// Mauvaise réponse
playIncorrect();  // descente sawtooth, ~0,4s — aucune animation
```

### Comportement des fonctions

| Fonction | Son | Animation |
|---|---|---|
| `playCorrect()` | Accord Do-Mi-Sol (sinus, ~0,55s) | — |
| `playIncorrect()` | Descente 320→160 Hz (sawtooth, ~0,4s) | — |
| `launchConfetti()` | — | 60 particules colorées, 1,8s, canvas auto-supprimé |

### Règles importantes

- Ne jamais appeler ces fonctions au chargement de la page.
- `playIncorrect()` seul sur mauvaise réponse — pas de confettis.
- L'`AudioContext` est créé paresseusement et réutilisé (`window._feedbackAudioCtx`).
- Le canvas des confettis est créé en `position:fixed; z-index:9999` et supprimé automatiquement après 1,8s.
- Si l'app a une fonction centrale de feedback (ex. `showFeedback(correct, msg)`), injecter les appels à l'intérieur plutôt qu'à chaque point de validation.

---

## Choses à ne pas modifier sans réfléchir

1. **Les attributs `data-*` des cartes** (`data-domain`, `data-cycle`, `data-keywords`) — la logique JS en dépend entièrement.
2. **Les IDs JS** : `#search-input`, `#domain-filters`, `#cycle-filters`, `#result-count`, `#no-results`, `#app-grid`.
3. **Les classes de state** : `.active-domain`, `.active-cycle`, `.hidden`, `.visible`.
4. **Le CSS de la barre `controls`** : `position: sticky; top: 0; z-index: 100` — nécessaire pour que les filtres restent visibles lors du scroll.
5. **Les polices Google Fonts** : les deux familles (Baloo 2 + Source Sans 3) doivent toujours être chargées ensemble.

---

## Conventions de langue

### Typographie française
- Les titres et noms d'activités suivent les règles françaises : seul le premier mot prend une majuscule, sauf noms propres.
- Exemples corrects : "Calcul en colonne", "Le grand saut", "Nombres flèches"
- Exemples incorrects : "Calcul en Colonne", "Le Grand Saut", "Nombres Flèches"
- Ne jamais appliquer de capitalisation à l'anglaise (title case).

## Skills disponibles

Trois skills sont disponibles dans `skills/`. Les lire systématiquement avant de créer ou modifier une app.

| Skill | Fichier | Quand l'utiliser |
|-------|---------|-----------------|
| `pedagogie-per` | `skills/pedagogie-per/SKILL.md` | Créer ou réviser une app |
| `design-portail` | `skills/design-portail/SKILL.md` | Créer ou modifier une app, ajouter une carte, vérifier la conformité |
| `accessibilite` | `skills/accessibilite/SKILL.md` | Créer ou modifier une app — contraintes motricité, visuo-spatial, feedback |

Les fichiers de référence PER sont dans `docs/per/`.
Le référentiel WCAG 2.2 est dans `docs/accessibilite/wcag22-resume.md`.

## Arbitrage entre skills en cas de conflit

Cette procédure prolonge la hiérarchie annoncée ci-dessus. Elle existe pour les tâches de **révision et d'audit**, où des règles bien intentionnées de skills différents peuvent se contredire sur du code déjà écrit. Les skills eux-mêmes restent orientés création et ne sont pas modifiés.

### Hiérarchie de priorité (du plus fort au plus faible)

1. `pedagogie-per`
2. `accessibilite`
3. `design-portail`

### Principe directeur

L'accessibilité et la forme améliorent la **manière dont un élément est présenté**, jamais son **contenu pédagogique**. Un feedback formatif riche, un étayage, une convention de classe reproduite fidèlement, des niveaux de différenciation, sont des choix pédagogiques délibérés. On peut améliorer leur forme. On ne les remplace jamais par une version plus pauvre.

### Règle générale (le cœur de la procédure)

À chaque étape, **une couche ne peut jamais défaire ce qu'une couche plus prioritaire a établi.** Une couche n'agit que sur ce que les couches supérieures ont laissé libre. Toute tension non résoluble dans ce sens est **consignée plutôt que tranchée**.

### Procédure d'arbitrage

À appliquer lors de toute révision ou audit d'une app existante, en trois temps ordonnés :

1. **Couche accessibilité.** Elle repère les manquements et propose des correctifs, **sans les appliquer encore**.

2. **Couche pédagogie (droit de veto).** Elle relit chaque correctif proposé.
   - Si un correctif sert l'objectif PER ou est neutre, il est **retenu et devient acquis** : il descend verrouillé jusqu'à la fin de la procédure.
   - S'il dessert le geste pédagogique — par exemple en appauvrissant un feedback formatif, en aplatissant une notation conventionnelle de classe, ou en cassant le contrat de retry `drill` ou `instance` — la **pédagogie l'emporte** : le correctif est abandonné et la tension est consignée sous la mention **« CONFLIT À ARBITRER »** avec une phrase d'explication.

3. **Couche design-portail (conformité de forme, en dernier).** Elle s'applique **uniquement** aux points qui ne sont contraints ni par un correctif d'accessibilité retenu à l'étape 1, ni par un arbitrage rendu par la pédagogie à l'étape 2. Elle **ne peut annuler ni l'un ni l'autre**. Si une convention de design entre en tension avec un correctif d'accessibilité retenu, **l'accessibilité l'emporte**, et la tension est consignée sous **« CONFLIT À ARBITRER »**.

### Règle de remontée

Tout point de fond pédagogique qu'une routine autonome n'est pas certaine de pouvoir trancher seule est consigné sous **« À VALIDER PAR ISAAC »** plutôt que tranché silencieusement.

### Note d'usage

Cette procédure vaut pour les **routines autonomes** de Claude Code. Quand Isaac travaille en dialogue dans le projet Claude.ai, c'est lui qui arbitre, et la procédure n'a pas à être déroulée.

## Hiérarchie des skills

En cas de conflit entre les trois skills du projet, cet ordre de priorité s'applique :

1. `skills/pedagogie-per/SKILL.md` — l'intention pédagogique est non négociable. Aucune contrainte de design ou d'accessibilité ne peut trahir l'objectif PER ciblé par l'app.

2. `skills/accessibilite/SKILL.md` — les contraintes physiques du public (déficience motrice, troubles visuo-spatiaux) sont non négociables. Le design s'adapte, pas l'accessibilité.

3. `skills/design-portail/SKILL.md` — les conventions visuelles s'appliquent dans le respect des deux niveaux supérieurs.

En cas de doute sur un conflit, signaler à l'utilisateur plutôt qu'arbitrer silencieusement.

---

## Convention : périmètre des apps et titres

**Une app = un objectif pédagogique = un groupe d'années scolaires** (1H-2H, 3H-4H, 5H-6H ou 7H-8H).

Les niveaux internes servent uniquement la différenciation à l'intérieur de ce groupe. Ils ne doivent pas couvrir un autre groupe d'années ou un autre cycle.

**Si une app couvre plusieurs groupes d'années scolaires, elle doit être scindée** : créer une app distincte par groupe, chacune avec sa propre carte dans `index.html` et son propre `data-harmos`. Ne jamais élargir les niveaux internes d'une app existante pour absorber un groupe d'années supplémentaire.

Si deux apps partagent le même thème mais ciblent des groupes d'années différents, leurs titres peuvent être identiques. Dans ce cas, ajouter le groupe d'années entre parenthèses dans le titre de la carte du portail : "Figures géométriques (5H-6H)".
