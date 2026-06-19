---
name: pedagogie-per
description: >
  Ancre chaque app pédagogique du portail dans le PER romand (Plan d'études romand, CIIP 2024).
  Utilise ce skill chaque fois que tu crées, révises ou enrichis une app du portail — même si
  la demande ne mentionne pas explicitement le PER. Il guide le choix de l'objectif d'apprentissage,
  la progression attendue par demi-cycle, les attentes fondamentales à viser, les principes
  didactiques à respecter, et la formulation du contenu pédagogique (exercices, textes, données).
  Déclenche aussi quand on te demande de "vérifier l'alignement pédagogique" d'une app existante.
---

# Skill : pedagogie-per

## Étape 1 — Lire les fichiers de référence PER

Avant toute chose, lis les fichiers pertinents dans `docs/per/` :

- `docs/per/per-structure.md` — structure globale, cycles, correspondance HarmoS (lire en PREMIER)
- `docs/per/per-msn.md` — si l'app touche aux Maths ou aux Sciences de la nature
- `docs/per/per-langues.md` — si l'app touche au Français, Allemand ou Anglais
- `docs/per/per-shs.md` — si l'app touche à la Géographie, l'Histoire ou la Citoyenneté

Si le domaine de l'app n'est pas couvert par ces fichiers, travaille avec les principes généraux
du PER décrits dans `per-structure.md` (Capacités transversales, démarche scientifique, etc.).

---

## Étape 2 — Identifier l'objectif d'apprentissage

Pour chaque nouvelle app, établir :

```
Objectif PER : [CODE] – [Titre court de l'objectif]
Composantes travaillées : [numéros et libellés des composantes visées]
Cycle : C1 / C2 / C3
Demi-cycle / années HarmoS : [ex. 3H-4H]
```

**Règle de granularité :** chaque app doit viser UN objectif principal (ex. MSN 14) et au plus
deux objectifs secondaires (ex. MSN 12 en soutien). Ne pas disperser.

**Modélisation (MSN 15 / MSN 25) — jamais un objectif principal autonome.** La modélisation
ne s'enseigne pas pour elle-même : elle se travaille **à travers** un objectif concret, dont elle
emprunte la progression et les attentes fondamentales.

- MSN 15 (C1) se réalise à travers MSN 11, 12, 13 ou 14.
- MSN 25 (C2) se réalise à travers MSN 21, 22, 23 ou 24.

Une app de modélisation a donc toujours **un objectif concret comme principal** (ex. MSN 13 –
choix du « sens de l'opération » dans une situation) **et** MSN 15/25 comme objectif transversal
co-visé. C'est ce double ancrage qui doit figurer dans `data-per` (deux codes) et sur la carte
(deux badges `.badge-per`). Ne jamais tagguer une app « MSN 15 » ou « MSN 25 » seule.

**Tableau de correspondance rapide pour les apps existantes du portail :**

| App | Objectif principal | Cycle |
|-----|--------------------|-------|
| balance.html | MSN 14 – Grandeurs et mesures (masse) | C1 |
| longueurs.html | MSN 14 – Grandeurs et mesures (longueur) | C1 |
| capacites.html | MSN 14 – Grandeurs et mesures (capacité) | C1 |
| surfaces.html | MSN 14 – Grandeurs et mesures (aire) | C1 |
| place-le-nombre-c2.html | MSN 22 – Nombres (représentation) | C2 |

---

## Étape 3 — Calibrer la progression par demi-cycle

**Règle fondamentale : une app = un groupe d'années scolaires** (1H-2H, 3H-4H, 5H-6H ou 7H-8H).
Les niveaux internes différencient à l'intérieur de ce groupe uniquement. Si une app couvre plusieurs groupes, elle doit être **scindée** : créer une app distincte par groupe avec sa propre carte `index.html`.

Chaque niveau d'une app doit correspondre à une étape de la progression PER.

**Pattern pour les apps en drill :**

```
Niveau 1 → 1re partie du cycle (ex. 1H-2H ou 5H-6H)
             Tâche simple, peu de variables, contexte familier
Niveau 2 → 2e partie du cycle (ex. 3H-4H ou 7H-8H)
             Complexité accrue, plus de données, raisonnement requis
Niveau 3 → Vers les attentes fondamentales de fin de cycle
             Tâches proches des attentes fondamentales PER
```

**Pour les apps en situation-problème :** la situation doit permettre plusieurs entrées
(élèves de 1re et de 2e partie du cycle peuvent y entrer, mais avec des stratégies différentes).

---

## Étape 4 — Vérifier les attentes fondamentales

Formuler explicitement ce que l'app entraîne par rapport aux attentes fondamentales :

> "Au cours, mais au plus tard à la fin du cycle, l'élève…"
> [coller ici les attentes fondamentales PER pertinentes]

Vérifier que les exercices au Niveau 2-3 de l'app permettent effectivement de travailler
ces attentes. Si ce n'est pas le cas, ajuster le contenu ou signaler l'écart.

---

## Étape 5 — Respecter les principes didactiques

Selon le domaine, appliquer les principes suivants :

### Pour les apps de Mathématiques (MSN)
- La résolution de problèmes précède ou accompagne le drill technique
- Le sens de l'opération/concept avant l'algorithme
- Toujours proposer un contexte (pas d'exercice "calculer 47 + 28" sans situation)
- Encourager la communication de la démarche ("Comment as-tu trouvé ?")
- La manipulation ou la représentation visuelle précède la symbolisation

### Pour les apps de Français (L1)
- Ancrer dans un genre textuel réel (pas de phrases décontextualisées)
- Démarche inductive : observer des exemples avant d'énoncer la règle
- Toujours expliquer pourquoi la réponse est juste/fausse (pas seulement vrai/faux)
- Alterner production et réception

### Pour les apps de SHS
- Partir du vécu et de l'environnement proche de l'élève
- Progresser du familier vers l'inconnu
- Favoriser la confrontation de points de vue

### Règles universelles (tous domaines)
- Le feedback doit être formatif : dire ce qui est juste/faux ET pourquoi
- L'élève doit pouvoir progresser sans aide extérieure (consignes autonomisantes)
- Éviter le découragement : offrir un Niveau 1 accessible à tous

**Les messages de feedback sont du contenu pédagogique protégé.**
Un audit d'accessibilité ou un correctif technique ne doit jamais les réécrire.
Seul un travail explicitement pédagogique (ex. révision PER) peut les modifier.
Voir la règle de non-régression dans `skills/accessibilite/SKILL.md` § 5.

---

## Étape 5 bis — Drill vs instance signifiante

Le type de tâche d'une app découle de son objectif PER et détermine ce qui doit
arriver après une erreur. Deux familles existent dans le portail :

### Drill — l'erreur clôt l'item
L'erreur termine l'item : pas de retry sur la même instance, on passe à l'exercice
suivant. Sur une tâche de drill, le retry encouragerait un tâtonnement aveugle sans
valeur pédagogique (l'élève changerait de réponse au hasard jusqu'à tomber juste).
Exemples : calcul mental, reconnaissance rapide, restitution de faits numériques.

### Instance signifiante — l'erreur est exploitable
L'erreur est une information exploitable par l'élève. Le feedback formatif indique
**quoi corriger**, et l'élève doit pouvoir **réessayer sur la même instance** jusqu'à
réussite. Supprimer le retry rendrait le feedback formatif inutile : l'élève n'aurait
pas l'occasion d'appliquer ce que le feedback lui dit de corriger.
Exemples : placer un nombre sur une droite graduée, équilibrer une balance, identifier
le sujet et le prédicat d'une phrase.

### Règle
Le choix entre drill et instance signifiante relève de **l'objectif PER** de l'app,
pas d'une préférence de design. Une app **instance signifiante doit autoriser le retry
sur la même instance après une erreur, jusqu'à réussite** — le feedback formatif et la
possibilité de corriger sont indissociables. Le pattern technique correspondant
(constante `TYPE_TACHE`, contrat de `showFeedback`) est documenté dans
`skills/design-portail/SKILL.md`.

---

## Étape 6 — Guider le contenu pédagogique

### Formulation des consignes
- Utiliser le vocabulaire PER du cycle ciblé (pas de termes hors-portée)
- Phrases courtes et directes (sujet + verbe + complément)
- C1 : max. 8-10 mots par consigne
- C2 : max. 15 mots par consigne
- Pas de double négation, pas de subordonnée complexe

### Données et valeurs numériques
Pour les apps de Maths, respecter les plages de nombres du PER :
- C1 / 1H-2H : nombres jusqu'à 20 (manipulation), contexte quotidien
- C1 / 3H-4H : nombres jusqu'à 100, dizaines entières, opérations simples
- C2 / 5H-6H : nombres jusqu'à 1000, fractions simples, unités de mesure
- C2 / 7H-8H : nombres jusqu'à 100 000, 4 opérations, conversions

### Exemples et contextes
- Choisir des contextes proches de l'élève (école, famille, nature, sport)
- Éviter les contextes culturellement marqués qui excluent certains élèves
- Varier les contextes d'un exercice à l'autre pour éviter la fixation

---

## Checklist pédagogique finale

Avant de déclarer une app terminée, vérifier :

- [ ] L'objectif PER est identifié et documenté (code + composantes)
- [ ] Chaque niveau correspond à une étape de la progression PER
- [ ] Les exercices du dernier niveau travaillent les attentes fondamentales
- [ ] Les consignes sont formulées dans un vocabulaire adapté au cycle
- [ ] Les plages de valeurs/données respectent la progression PER
- [ ] Le feedback explique pourquoi (pas seulement vrai/faux)
- [ ] La description de la carte dans index.html reflète l'objectif PER
