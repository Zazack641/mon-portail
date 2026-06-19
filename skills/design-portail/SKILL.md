---
name: design-portail
description: >
  Garantit l'alignement visuel et technique de tout ce qui touche au portail pédagogique
  "Mes outils pour apprendre" (HTML/CSS/JS vanilla, iPad tactile, cycles HarmoS).
  Utilise ce skill chaque fois que tu crées ou modifies une app pédagogique, que tu ajoutes
  une carte dans index.html, ou que tu touches à app-base.css, appUtils.js ou feedbackUtils.js.
  Couvre trois niveaux : la carte dans le portail, l'app elle-même, et le contenu affiché.
  Déclenche aussi pour toute vérification de conformité avant de conclure une tâche.
---

# Skill : design-portail

## Architecture du projet (rappel obligatoire)

```
mon-portail/
├── index.html                 ← portail monopage (HTML + CSS + JS inline)
└── apps/
    ├── app-base.css           ← styles partagés (NE PAS redéfinir inline)
    ├── appUtils.js            ← utilitaires JS (charger AVANT le script app)
    ├── feedbackUtils.js       ← feedback audio-visuel (charger APRÈS, juste avant </body>)
    ├── _template.html         ← squelette canonique pour toute nouvelle app
    └── [nom-app].html         ← apps individuelles
```

**Règle absolue :** toujours partir de `_template.html` pour une nouvelle app.
Ne jamais copier une app existante comme base.

---

## Niveau 1 — La carte dans index.html

### Attributs obligatoires d'une app-card

```html
<article class="app-card"
  data-domain="[francais|allemand|anglais|maths|sciences|geo|histoire]"
  data-harmos="[1H-2H|3H-4H|5H-6H|7H-8H]"
  data-per="[code objectif PER, ex. MSN 14]"
  data-keywords="[mots-clés minuscules séparés par des espaces]"
  style="animation-delay: NNNms;">
```

**data-domain — 7 branches, palette PER officielle CIIP**

| `data-domain` | Branche               | Domaine PER | Header / bouton | Fond badge | Texte badge | Classe bouton         | Classe badge     | Classe icône     |
|---------------|-----------------------|-------------|-----------------|------------|-------------|----------------------|------------------|------------------|
| `francais`    | Français              | Langues     | `#B8960C`       | `#FBF5D6`  | `#7A6200`   | `.launch-btn.francais` | `.badge-francais` | `.icon-francais` |
| `allemand`    | Allemand              | Langues     | `#A08510`       | `#F5F0D0`  | `#6B5800`   | `.launch-btn.allemand` | `.badge-allemand` | `.icon-francais` |
| `anglais`     | Anglais               | Langues     | `#8C7515`       | `#F0ECC8`  | `#5C4D00`   | `.launch-btn.anglais`  | `.badge-anglais`  | `.icon-francais` |
| `maths`       | Mathématiques         | MSN         | `#C0272D`       | `#FDECEA`  | `#8B0000`   | `.launch-btn.maths`    | `.badge-maths`    | `.icon-maths`    |
| `sciences`    | Sciences de la nature | MSN         | `#A02030`       | `#F8E4E4`  | `#700018`   | `.launch-btn.sciences` | `.badge-sciences` | `.icon-sciences` |
| `geo`         | Géographie            | SHS         | `#1A6B4A`       | `#E6F2ED`  | `#0D4A30`   | `.launch-btn.geo`      | `.badge-geo`      | `.icon-geo`      |
| `histoire`    | Histoire              | SHS         | `#1A5C5C`       | `#E0EEEE`  | `#0D3D3D`   | `.launch-btn.histoire` | `.badge-histoire` | `.icon-histoire` |

**data-harmos — années HarmoS**

| Valeur      | Badge CSS      | Couleurs badge           | Correspond à |
|-------------|----------------|--------------------------|--------------|
| `"1H-2H"`   | `.badge-1h2h`  | bg `#FEF3E2`, txt `#8A4E00` | Cycle 1 (début) |
| `"3H-4H"`   | `.badge-3h4h`  | bg `#FEF3E2`, txt `#8A4E00` | Cycle 1 (fin)   |
| `"5H-6H"`   | `.badge-5h6h`  | bg `#F0EAFF`, txt `#5B2D9E` | Cycle 2 (début) |
| `"7H-8H"`   | `.badge-7h8h`  | bg `#F0EAFF`, txt `#5B2D9E` | Cycle 2 (fin)   |

**Règle : une app = un seul `data-harmos`.** Si les niveaux internes d'une app couvrent deux groupes d'années différents (ex. Niveau 1 en 3H-4H et Niveau 2 en 5H-6H), l'app doit être **scindée** en deux apps séparées, chacune avec sa propre carte dans `index.html`.

**data-per — code objectif PER**

Attribut facultatif. Exemples : `"MSN 14"`, `"MSN 22"`, `"L1 16"`, `"SHS 11"`.
Quand présent, afficher un badge discret `.badge-per` dans `.card-badges`.

```html
<span class="badge badge-per">MSN 14</span>
```

**Apps de modélisation (MSN 15 / MSN 25) — deux codes.** La modélisation n'est jamais autonome : elle se réalise à travers un objectif concret (MSN 11–14 en C1, MSN 21–24 en C2). Une telle app porte donc **deux codes** dans `data-per` (concret puis transversal, séparés par une espace) et **deux badges** `.badge-per`. Voir `skills/pedagogie-per/SKILL.md`.

```html
<article class="app-card" ... data-per="MSN 13 MSN 15" ...>
  ...
  <span class="badge badge-per">MSN 13</span>
  <span class="badge badge-per">MSN 15</span>
```

Style `.badge-per` : `background: #F1F5F9; color: #64748B; font-size: 11px; font-weight: 600`.
Ce badge est destiné à l'enseignant — pas à l'élève.

### Structure d'une carte

```html
<article class="app-card"
  data-domain="maths"
  data-harmos="3H-4H"
  data-per="MSN 14"
  data-keywords="aire surface formes grandeurs mesures"
  style="animation-delay: NNNms;">
  <div class="card-header">
    <div class="card-icon icon-maths">📐</div>
    <div class="card-title-wrap">
      <h2 class="card-title">Les surfaces</h2>
    </div>
  </div>
  <p class="card-desc">Description courte, 1-2 phrases max.</p>
  <div class="card-badges">
    <span class="badge badge-maths">Mathématiques</span>
    <span class="badge badge-3h4h">3H–4H</span>
    <span class="badge badge-theme">Grandeurs et mesures</span>
    <span class="badge badge-per">MSN 14</span>  <!-- uniquement si data-per connu -->
  </div>
  <a href="apps/surfaces.html" class="launch-btn maths">Lancer l'activité</a>
</article>
```

**Règles de contenu de la carte :**
- Titre : première lettre en majuscule uniquement (règle française), pas de title case anglophone
- Description : 1-2 phrases, vocabulaire compréhensible par un parent, pas de jargon PER
- Badge thème : utiliser la terminologie PER (ex. "Grandeurs et mesures", "Nombres", "Compréhension de l'écrit")
- Emoji icône : choisir un emoji parlant, cohérent avec le domaine

**animation-delay :** incrémenter de 30 ms par rapport à la carte précédente dans le même groupe.

---

## Niveau 2 — L'app pédagogique

### Couleurs de l'app selon la branche

Le header (`.app-header`) et les boutons primaires (`.level-btn.active`, `.verify-btn`, boutons sélectionnés) doivent utiliser la couleur de la branche définie dans le tableau ci-dessus.

**Apps existantes** (styles inline) : remplacer directement les hex dans le fichier.
**Nouvelles apps** (depuis `_template.html`) : déclarer `--app-header-bg` dans `:root` avec la couleur de branche.

Le bouton secondaire `.new-btn` (vert `#0F7860`) est une couleur neutre de navigation — ne pas le changer au couleur de branche.

### Structure HTML canonique (depuis _template.html)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de l'activité</title>
  <link rel="stylesheet" href="app-base.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <!-- Google Fonts : Nunito + Source Sans 3 -->
  <style>/* styles spécifiques à l'app UNIQUEMENT */</style>
</head>
<body>

<header class="app-header">
  <a href="../index.html" class="back-link">← Retour</a>
  <h1>Titre de l'activité</h1>
  <div class="header-spacer"></div>
</header>

<div class="level-bar" role="group" aria-label="Choisir le niveau">
  <button class="level-btn active" data-level="1" aria-pressed="true">Niveau 1</button>
  <button class="level-btn" data-level="2" aria-pressed="false">Niveau 2</button>
</div>

<main>
  <div class="question-box" id="question-box">Chargement…</div>
  <!-- zone de contenu spécifique -->
  <div class="feedback" id="feedback"></div>
  <div class="action-row">
    <button class="verify-btn" id="verify-btn" disabled>Vérifier</button>
    <button class="new-btn" id="new-btn">Nouvel exercice</button>
  </div>
</main>

<script src="appUtils.js"></script>
<script>
  /* script de l'app */
</script>
<script src="feedbackUtils.js"></script>
</body>
</html>
```

### Typographie

| Usage | Police | Graisse |
|-------|--------|---------|
| Titres, boutons, question-box | Nunito | 800-900 |
| Corps, filtres, descriptions | Source Sans 3 | 400-700 |

**Taille de police minimum dans une app :**
- Texte de question : `clamp(17px, 3.5vw, 21px)` (déjà dans app-base.css)
- Texte de feedback : `clamp(16px, 3vw, 19px)` (déjà dans app-base.css)
- Les seuils minimaux de taille de texte pour les apps sont définis dans `skills/accessibilite/SKILL.md`, qui fait foi (18px pour les consignes, 22px pour les éléments interactifs).

### Tactilité iPad (règles impératives)

Les seuils de cible tactile, de taille de texte, de contraste et les règles de focus visible sont définis dans `skills/accessibilite/SKILL.md`, qui fait foi. Ne pas redéclarer ici de chiffre concurrent.

Ce qui relève du design et s'applique à tout bouton ou zone cliquable custom :
- `touch-action: manipulation`
- `-webkit-appearance: none`
- Cohérence visuelle avec les boutons existants
- Les états `:hover`, `:active` **et** `:focus` doivent tous être visibles ; le détail des règles de focus fait foi dans `skills/accessibilite/SKILL.md`.

Boutons d'action (verify-btn, new-btn) : déjà conformes dans app-base.css.
Boutons de niveau (level-btn) : déjà conformes dans app-base.css.

### Feedback audio-visuel (feedbackUtils.js)

```js
// Bonne réponse
playCorrect();      // accord Do-Mi-Sol, ~0.55s
launchConfetti();   // 60 particules, 1.8s

// Mauvaise réponse
playIncorrect();    // descente 320->160 Hz, ~0.4s
```

**Règles :**
- Appeler depuis `showFeedback(correct, msg)` uniquement, pas depuis plusieurs endroits
- Ne jamais appeler au chargement de la page
- Pas de confettis sur mauvaise réponse

### Type de tâche : drill vs instance signifiante (`TYPE_TACHE`)

Le comportement de `showFeedback` après une erreur dépend du type de tâche de l'app
(distinction pédagogique documentée dans `skills/pedagogie-per/SKILL.md` § « Drill vs
instance signifiante »). Chaque app **doit déclarer en tête de script** une constante :

```js
// 'drill'    : l'erreur clôt l'item, on passe au suivant (calcul mental, reconnaissance rapide…)
// 'instance' : l'erreur est corrigeable, retry sur la MÊME instance jusqu'à réussite
//              (placer un nombre, équilibrer une balance, identifier sujet/prédicat…)
const TYPE_TACHE = 'drill';
```

**Contrat de `showFeedback(correct, msg)` :**

| Cas | Feedback | `verify-btn` | `new-btn` |
|-----|----------|--------------|-----------|
| `drill`, correct **ou** incorrect | affiché (persistant) | masqué | visible |
| `instance`, correct | feedback positif persistant | masqué | visible |
| `instance`, incorrect | feedback **formatif** persistant (quoi corriger) | **reste actif** | **reste caché** |

Dans le cas `instance` + incorrect, l'élève corrige sa réponse et revérifie sur la
même instance : on ne réinitialise pas l'exercice, on ne révèle pas « Nouvel exercice ».

**Snippet `showFeedback` de référence (gère les deux types) :**

```js
function showFeedback(correct, msg) {
  feedbackEl.className = 'feedback ' + (correct ? 'correct' : 'wrong');
  feedbackEl.textContent = msg;
  if (correct) { playCorrect(); launchConfetti(); } else { playIncorrect(); }

  if (correct || TYPE_TACHE === 'drill') {
    // Item clos : on propose la suite.
    verifyBtn.style.display = 'none';
    newBtn.classList.add('visible');
    // Déplacement de focus requis par skills/accessibilite/SKILL.md : après une
    // validation qui modifie le DOM, le focus doit suivre l'élément nouvellement
    // affiché (navigation clavier). Ne pas retirer par souci de concision.
    newBtn.focus();
  } else {
    // 'instance' + incorrect : l'élève corrige et revérifie la même instance.
    verifyBtn.style.display = '';
    verifyBtn.disabled = false;
    newBtn.classList.remove('visible');
  }
}
```

Toute nouvelle app **doit déclarer `TYPE_TACHE` en tête de script**. L'app
`balance.html` implémente déjà ce comportement de retry de façon ad hoc et peut servir
de référence pour une tâche à instance signifiante.

### Couleurs de valeurs de position (apps maths avec chiffres)

**Colorier seulement quand la valeur de position est l'objet d'apprentissage** (numération, décomposition, complément, calcul en colonne…). Si les nombres ne sont que des quantités-support d'une autre tâche (ex. choisir l'opération qui modélise une situation), **ne pas colorier** : cela concurrencerait le point d'attention unique. L'accessibilité prime sur cette convention (hiérarchie des skills).

```css
:root {
  --color-units:    #3B7DD8; /* unités    — bleu  */
  --color-tens:     #D64045; /* dizaines  — rouge */
  --color-hundreds: #3A9E6F; /* centaines — vert  */
}
```

Cycle : bleu → rouge → vert → bleu… Utiliser `colorForRank(rank)` de appUtils.js.
Ne jamais mettre les hex en dur : toujours `var(--color-units)` etc.

### Variables CSS de app-base.css (à ne pas redéclarer)

```css
--app-bg:         #F7F8FA
--app-text:       #1A1A2E
--app-border:     #E2E8F0
--app-header-bg:  #1A3A5C  ← override avec la couleur de branche dans :root
--app-correct-bg: #D1FAE5 / --app-correct-fg: #065F46
--app-wrong-bg:   #FEE2E2   / --app-wrong-fg: #991B1B
```

### Accessibilité WCAG AA

**Dans les apps, vérifier impérativement :**

| Élément | Attribut requis |
|---------|----------------|
| Groupe de boutons niveau | `role="group"` + `aria-label="Choisir le niveau"` |
| Chaque level-btn | `aria-pressed="true/false"` mis à jour dynamiquement |
| verify-btn désactivé | `disabled` (géré par JS) |
| Images décoratives | `aria-hidden="true"` |
| Zones de résultat live | `aria-live="polite"` si le contenu change dynamiquement |

**Contraste :** les exigences de contraste font foi dans `skills/accessibilite/SKILL.md` — ratio 4,5:1 (WCAG AA) pour le texte courant et exigence renforcée 7:1 sur les éléments critiques (consignes, feedbacks). Les variables `--app-correct-*` et `--app-wrong-*` sont déjà conformes.

### Structure JS canonique

```js
// Références DOM
const questionBox = document.getElementById('question-box');
const feedbackEl  = document.getElementById('feedback');
const verifyBtn   = document.getElementById('verify-btn');
const newBtn      = document.getElementById('new-btn');

// Type de tâche : 'drill' (l'erreur clôt l'item) ou 'instance' (retry sur la même instance).
// Voir « Type de tâche : drill vs instance signifiante » ci-dessus.
const TYPE_TACHE = 'drill';

// État
let currentLevel = 1;
let state = {};

// Feedback unifié (point unique d'appel)
function showFeedback(correct, msg) {
  feedbackEl.className = 'feedback ' + (correct ? 'correct' : 'wrong');
  feedbackEl.textContent = msg;
  if (correct) { playCorrect(); launchConfetti(); } else { playIncorrect(); }

  if (correct || TYPE_TACHE === 'drill') {
    verifyBtn.style.display = 'none';
    newBtn.classList.add('visible');
    // Déplacement de focus requis par skills/accessibilite/SKILL.md : après une
    // validation qui modifie le DOM, le focus doit suivre l'élément nouvellement
    // affiché (navigation clavier). Ne pas retirer par souci de concision.
    newBtn.focus();
  } else {
    // 'instance' + incorrect : l'élève corrige et revérifie la même instance.
    verifyBtn.style.display = '';
    verifyBtn.disabled = false;
    newBtn.classList.remove('visible');
  }
}

// Nouvelle question (appelée au changement de niveau ET sur "Nouvel exercice")
function newExercise() {
  // Réinitialiser TOUT l'état ici
  feedbackEl.className = 'feedback';
  verifyBtn.style.display = '';
  verifyBtn.disabled = true;
  newBtn.classList.remove('visible');
}

// Sélecteur de niveau
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.level-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentLevel = parseInt(btn.dataset.level);
    newExercise();
  });
});

newBtn.addEventListener('click', newExercise);
```

---

## Niveau 3 — Le contenu affiché dans l'app

### Formulation des textes

- Phrases courtes, structure simple (sujet + verbe + complément)
- C1 (1H–4H) : max. 8-10 mots par consigne, vocabulaire du quotidien
- C2 (5H–8H) : max. 15 mots, peut inclure des termes disciplinaires si déjà rencontrés en classe
- Pas de double négation
- Les nombres inférieurs à 13 s'écrivent en lettres dans une phrase (règle typographique)
- Les consignes commencent par un verbe d'action ("Trouve...", "Compare...", "Clique sur...")

### Messages de feedback

**Bonne réponse :** encourageant et explicatif
- "Bravo ! 3 est bien plus grand que 2."
- "Exact ! La règle est plus longue que le crayon."

**Mauvaise réponse :** neutre, jamais culpabilisant, avec l'explication
- "Pas tout à fait. Recompte les carreaux de chaque forme."
- "Ce n'est pas ça. 47 est plus grand que 39 : regarde les dizaines d'abord."

**À éviter :** "Faux !", "Erreur !", "Tu t'es trompé(e)." — trop négatifs pour des jeunes élèves.

### Labels des niveaux

Format : "Niveau 1", "Niveau 2", "Niveau 3" — ou avec une précision courte :
"Niveau 1 · 2 objets", "Niveau 2 · orientations variées"
Pas de libellés PER techniques sur les boutons (ils sont pour l'élève, pas pour l'enseignant).

---

## Checklist de conformité — à parcourir avant de conclure

### Carte dans index.html
- [ ] `data-domain` valide (l'une des 7 valeurs : `francais`, `allemand`, `anglais`, `maths`, `sciences`, `geo`, `histoire`)
- [ ] `data-harmos` valide (`1H-2H`, `3H-4H`, `5H-6H` ou `7H-8H`)
- [ ] `data-per` présent si le code objectif PER est connu (ex. `"MSN 14"`)
- [ ] `data-keywords` renseignés (mots-clés utiles à la recherche)
- [ ] Classe du bouton correcte (`.launch-btn.[branche]` selon le tableau)
- [ ] Classe de badge domaine correcte (`.badge-[branche]` selon le tableau)
- [ ] Classe de badge HarmoS correcte (`.badge-1h2h`, `.badge-3h4h`, `.badge-5h6h` ou `.badge-7h8h`)
- [ ] Badge `.badge-per` présent si `data-per` est renseigné
- [ ] Classe d'icône correcte (`.icon-[branche]` selon le tableau)
- [ ] animation-delay incrémenté de 30ms
- [ ] Titre en typographie française (majuscule initiale seule)

### App HTML
- [ ] Basée sur `_template.html` (pas sur une app existante)
- [ ] `app-base.css` lié dans `<head>`
- [ ] `appUtils.js` chargé AVANT le script app
- [ ] `feedbackUtils.js` chargé APRÈS, juste avant `</body>`
- [ ] Aucune redéfinition inline de ce qui existe dans `app-base.css`
- [ ] Classes HTML canoniques respectées (`.app-header`, `.level-bar`, `.question-box`, `.feedback`, `.action-row`, `.verify-btn`, `.new-btn`)
- [ ] `← Retour` pointe vers `../index.html`
- [ ] Couleur de header et boutons primaires = couleur de la branche (tableau ci-dessus)

### Tactilité et accessibilité
- [ ] Cibles tactiles, taille de texte, contraste et focus conformes à `skills/accessibilite/SKILL.md` (source unique)
- [ ] `touch-action: manipulation` sur les éléments interactifs custom
- [ ] `aria-pressed` mis à jour dynamiquement sur les level-btn
- [ ] `role="group"` + `aria-label` sur la level-bar
- [ ] États `:hover`, `:active` et `:focus` tous visibles

### JS et feedback
- [ ] `TYPE_TACHE` déclaré en tête de script (`'drill'` ou `'instance'`)
- [ ] `showFeedback()` est le point unique d'appel de `playCorrect/Incorrect/launchConfetti`
- [ ] Si `TYPE_TACHE === 'instance'` : une erreur garde `verify-btn` actif et `new-btn` caché (retry sur la même instance)
- [ ] `newExercise()` remet à zéro TOUT l'état (feedback, boutons, question)
- [ ] Le changement de niveau appelle `newExercise()`
- [ ] Les fonctions feedbackUtils ne sont jamais appelées au chargement

### Contenu
- [ ] Consignes courtes et adaptées au cycle (1H–4H : max 10 mots)
- [ ] Feedback explicatif (pas seulement vrai/faux)
- [ ] Messages de mauvaise réponse neutres et bienveillants
- [ ] Valeurs numériques dans les plages PER du demi-cycle ciblé
