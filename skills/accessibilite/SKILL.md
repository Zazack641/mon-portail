# Skill — Accessibilité
Référentiel : WCAG 2.2 niveau AA, renforcé pour élèves avec déficiences
motrices, visuo-spatiales et cognitives.

---

## 1. Tailles tactiles

| Élément | Minimum |
|---|---|
| Boutons de réponse, boutons d'action | 64×64px |
| Boutons secondaires (retour, niveau) | 44×44px |
| Espacement entre zones tactiles adjacentes | 12px |

```css
.answer-btn  { min-width: 64px; min-height: 64px; }
.action-btn  { min-width: 64px; min-height: 64px; }
.back-btn    { min-width: 44px; min-height: 44px; }
/* Toujours aussi : */
touch-action: manipulation;
-webkit-appearance: none;
```

Aucun geste complexe comme seule option : pas de glisser-déposer exclusif,
pas de double-tap, pas de multi-doigts. Si drag-and-drop existe, un
tap simple doit toujours faire la même chose.

---

## 2. Contraste et couleur

Ce skill est la **source unique** pour les seuils de cible tactile, de taille de
texte, de contraste et de focus visible. Les autres fichiers (`CLAUDE.md`,
`skills/design-portail/SKILL.md`) renvoient ici et ne redéclarent aucun chiffre
concurrent.

- Texte courant : ratio de contraste minimum **4,5:1** (WCAG 2.2 AA)
- Éléments critiques (consignes, feedbacks) : ratio renforcé **7:1** — exigé, pas seulement visé
- Composants non textuels (bordures, icônes) : minimum **3:1**
- Taille de texte minimum :
  - **18px** pour le texte des consignes et le contenu non interactif
  - **22px** pour le **texte affiché à l'intérieur** des éléments interactifs
    (boutons de réponse, boutons d'action « Vérifier » / « Nouvel exercice »,
    boutons de choix, sélecteurs de niveau, etc.)
- Interlignage minimum : **1.5**

> **Texte interactif ≠ taille de cible tactile.** Ce seuil de **22px** porte
> uniquement sur la **taille de la police** du libellé *à l'intérieur* d'un
> élément interactif. Il est **distinct et cumulatif** avec la taille de cible
> tactile définie en section 1 (64×64px pour les boutons principaux, 44×44px
> pour les secondaires). Un même bouton doit satisfaire **les deux** exigences
> simultanément : une cible tactile d'au moins 64px **et** un texte d'au moins
> 22px à l'intérieur. L'une ne dispense jamais de l'autre.

**Ne jamais communiquer par la couleur seule.** Toujours doubler avec une
forme, une icône ou un texte.

```html
<!-- ❌ -->
<button class="wrong">A</button>

<!-- ✅ -->
<button class="wrong" aria-label="A — mauvaise réponse">❌ A</button>
```

---

## 3. Animations

Toute animation CSS doit être enveloppée dans :

```css
@media (prefers-reduced-motion: no-preference) {
  .mon-element { transition: transform 0.2s; }
}
```

Les confettis (`launchConfetti`) doivent être supprimés si
`prefers-reduced-motion` est activé :

```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  launchConfetti();
}
```

Pas d'éléments animés en arrière-plan pendant qu'une tâche est en cours.

---

## 4. Structure et repères

- Un seul élément actif ou zone d'attention à la fois
- Score, niveau et consigne restent au même emplacement pendant toute
  la session — ne jamais les déplacer dynamiquement
- Pas de minuterie, pas de contrainte de vitesse

---

## 5. Feedback

- Toujours deux canaux simultanés : visuel + sonore (fourni par `feedbackUtils.js`)
- Le message reste affiché jusqu'à une action explicite de l'élève
- En cas d'erreur : indiquer quoi faire, pas seulement signaler l'échec

**Règle de non-régression pédagogique — ne jamais réécrire un message de feedback.**
Les messages de feedback sont du contenu PER protégé (voir `skills/pedagogie-per/SKILL.md`).
Les correctifs accessibilité s'appliquent de façon **additive uniquement** :
appender l'indication d'action en fin de message si elle manque
(ex. « Appuie sur "Nouvel exercice" pour continuer. »),
sans toucher au contenu formatif existant.

```html
<!-- Le feedback ne se cache pas automatiquement -->
<!-- Il disparaît uniquement quand l'élève clique sur "Nouvel exercice" -->
<!-- aria-atomic="true" : le lecteur d'écran annonce le message en entier,
     pas en fragments, même quand il remplace un texte existant -->
<div class="feedback" id="feedback" role="status" aria-live="polite" aria-atomic="true"></div>
```

---

## 6. Gestion du focus — règle absolue

Après toute modification du DOM et après chaque validation de réponse,
repositionner le focus explicitement. Ne jamais laisser le focus se perdre.

### Après réécriture du DOM

```js
container.innerHTML = '...';
const target = container.querySelector('[data-focus-target]');
if (target) target.focus();
```

Marquer l'élément qui doit recevoir le focus avec `data-focus-target`
lors de la construction du HTML. Le null-check prévient un crash si le DOM
est dans un état inattendu (race condition de rendu, niveau vide).

### Après validation d'une réponse

```js
// Priorité 1 : si un bouton d'action suivante est visible
nextBtn.focus();

// Priorité 2 : si seul le feedback est visible
feedbackEl.setAttribute('tabindex', '-1');
feedbackEl.focus();
```

### Règle de priorité
1. Bouton d'action suivante visible → focus sur ce bouton
2. Sinon → focus sur le feedback
3. Jamais sur un élément désactivé ou invisible

### Boucle de tabulation (focus trap) — déjà fournie par `appUtils.js`

Toute app qui charge `appUtils.js` bénéficie automatiquement d'une boucle de
tabulation globale : un écouteur `keydown` sur `document` recalcule à chaque
pression de Tab la liste des éléments focusables réellement visibles, puis
ramène le focus du dernier élément au premier (Tab) ou du premier au dernier
(Shift+Tab). La liste étant recalculée à chaque frappe, elle reflète toujours le
DOM courant — un changement de niveau ou un « Nouvel exercice » ne casse pas la
boucle.

**Ne pas réimplémenter ce comportement app par app.** C'est un correctif global ;
les apps n'ont qu'à conserver un balisage focusable correct (boutons non
désactivés, `tabindex` cohérent).
