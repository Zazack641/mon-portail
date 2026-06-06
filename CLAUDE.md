# CLAUDE.md — Portail pédagogique « Mes outils pour apprendre »

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
| [`apps/app-base.css`](apps/app-base.css) | Reset, header, level-bar, question-box, feedback, boutons d'action, variables CSS couleurs |
| [`apps/appUtils.js`](apps/appUtils.js) | `randInt`, `randBetween`, `shuffle`, `pick`, `colorForRank` |
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
- `href` du `.launch-btn` : URL réelle de l'application
- Classe du bouton : `.launch-btn` (math, bleu marine) ou `.launch-btn.fr` (français, vert)
- `style="animation-delay: NNNms;"` : incrémenter de 30ms par rapport à la carte précédente

---

## Branches et couleurs PER

Les couleurs suivent la charte officielle CIIP du Plan d'études romand.
Chaque branche appartient à un domaine PER parent.

### Domaine LANGUES — jaune-ocre

| Branche  | Header / bouton | Fond badge | Texte badge |
|----------|-----------------|------------|-------------|
| Français | `#B8960C`       | `#FBF5D6`  | `#7A6200`   |
| Allemand | `#A08510`       | `#F5F0D0`  | `#6B5800`   |
| Anglais  | `#8C7515`       | `#F0ECC8`  | `#5C4D00`   |

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
- **`data-per`** : code objectif PER (ex. `"MSN 14"`, `"L1 16"`, `"SHS 11"`)

---

## Conventions de design

### Typographie

| Usage | Police | Graisse |
|-------|--------|---------|
| Titres (h1, h2 cartes, boutons) | **Nunito** | 800–900 |
| Corps de texte, filtres, descriptions | **Source Sans 3** | 400–700 |

Chargées depuis Google Fonts (également en cache local dans `_files/`).

### Palette de couleurs

| Rôle | Valeur |
|------|--------|
| Fond de page | `#F0F4F8` |
| Texte principal | `#1A2535` |
| Header / bouton math | `#1A3A5C` |
| Filtre actif domaine | `#1A3A5C` |
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
| Boutons lancer / recherche | `12px` |
| Filtres / badges | `999px` (pilule) |

### Tailles tactiles minimum (iPad)

| Élément | Taille min |
|---------|-----------|
| Boutons filtres (mobile) | `min-height: 36px` |
| Boutons filtres (≥768px) | `min-height: 40px` |
| Bouton « Lancer » | `padding: 14px` (≥15px sur tablette) |

Tous les éléments interactifs ont `touch-action: manipulation` et `-webkit-appearance: none`.

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

Toutes les applications mathématiques qui affichent des valeurs de position (unités, dizaines, centaines…) doivent respecter cette palette :

| Rang | Couleur | Hex |
|------|---------|-----|
| Unités | Bleu | `#3B7DD8` |
| Dizaines | Rouge | `#D64045` |
| Centaines | Vert | `#3A9E6F` |
| Milliers | Bleu | `#3B7DD8` (cycle recommence) |
| Dizaines de milliers | Rouge | `#D64045` |
| Centaines de milliers | Vert | `#3A9E6F` |

Le cycle bleu → rouge → vert se répète indéfiniment vers les grands rangs.

### Variables CSS à déclarer dans chaque app maths

Chaque application mathématique doit exposer ces trois variables CSS dans son `:root` :

```css
:root {
  --color-units:    #3B7DD8; /* unités       — bleu  */
  --color-tens:     #D64045; /* dizaines     — rouge */
  --color-hundreds: #3A9E6F; /* centaines    — vert  */
}
```

Utiliser ensuite `var(--color-units)` etc. dans tout le CSS de l'app — jamais les valeurs hex en dur. Cela garantit qu'un futur changement de palette se propage partout en une seule modification.

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
5. **Les polices Google Fonts** : les deux familles (Nunito + Source Sans 3) doivent toujours être chargées ensemble.

---

## Conventions de langue

### Typographie française
- Les titres et noms d'activités suivent les règles françaises : seul le premier mot prend une majuscule, sauf noms propres.
- Exemples corrects : "Calcul en colonne", "Le grand saut", "Nombres flèches"
- Exemples incorrects : "Calcul en Colonne", "Le Grand Saut", "Nombres Flèches"
- Ne jamais appliquer de capitalisation à l'anglaise (title case).

## Skills disponibles

Deux skills sont disponibles dans `skills/`. Les lire systématiquement avant de créer ou modifier une app.

| Skill | Fichier | Quand l'utiliser |
|-------|---------|-----------------|
| `pedagogie-per` | `skills/pedagogie-per/SKILL.md` | Créer ou réviser une app |
| `design-portail` | `skills/design-portail/SKILL.md` | Créer ou modifier une app, ajouter une carte, vérifier la conformité |

Les fichiers de référence PER sont dans `docs/per/`.

---

## Convention : périmètre des apps et titres

**Une app = un objectif pédagogique = un groupe d'années scolaires** (1H-2H, 3H-4H, 5H-6H ou 7H-8H).

Les niveaux internes servent uniquement la différenciation à l'intérieur de ce groupe. Ils ne doivent pas couvrir un autre groupe d'années ou un autre cycle.

Si deux apps partagent le même thème mais ciblent des groupes d'années différents, leurs titres peuvent être identiques. Dans ce cas, ajouter le groupe d'années entre parenthèses dans le titre de la carte du portail : "Figures géométriques (5H-6H)".
