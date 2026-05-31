# Suivi du projet — Portail pédagogique
*Dernière mise à jour : 2026-05-31*

---

## Contexte général

Portail web monopage pour élèves du primaire (iPad tactile), servant de lanceur vers 10 applications pédagogiques HTML/CSS/JS vanilla. Référentiel : cycles HarmoS (Cycle 1 = 1H–4H, Cycle 2 = 5H–8H).

Serveur local : `node server.js` → http://localhost:8766

---

## État des fichiers

```
mon-portail/
├── index.html                        ← portail principal (à jour)
├── apps-todo.md                      ← toutes les apps marquées [DONE]
├── apps-review.md                    ← revue didactique de chaque app
├── SUIVI.md                          ← ce fichier
└── apps/
    ├── balance.html          ← EN COURS DE RÉVISION (voir ci-dessous)
    ├── longueurs.html        ← RÉVISÉE (voir ci-dessous)
    ├── capacites.html        ← créée, non encore testée manuellement
    ├── surfaces.html         ← créée, non encore testée manuellement
    ├── comparaison-nombres.html  ← créée, non encore testée manuellement
    ├── droite-graduee.html   ← créée, non encore testée manuellement
    ├── saut-de-nombre.html   ← créée, non encore testée manuellement
    ├── valeur-position.html  ← créée, non encore testée manuellement
    ├── vocabulaire.html      ← créée, non encore testée manuellement
    ├── comprehension.html    ← créée, non encore testée manuellement
    └── vertical-calculation.html  ← existante avant ce projet, intouchée
```

---

## longueurs.html — état détaillé

### Ce qui a été fait dans cette session
- ✅ N2 — réduit à 3 barres (au lieu de 3–4)
- ✅ N2 — chaque barre part d'une position aléatoire dans la boîte, avec une direction aléatoire (–65° à +65°), garantie de rester entièrement dans les limites
- ✅ N2 — label positionné au-dessus du point de départ de chaque barre
- ✅ N1 & N2 — clic direct sur la barre (plus de boutons en bas) ; hit-test précis sur barres inclinées pour N2
- ✅ N3 — nouveau niveau : 4 barres à classer du plus court au plus long (ou inversement), présentées comme en N1, clic dans l'ordre → badge numéroté → bouton Vérifier

### Ce qui reste à tester sur iPad
- Tolérance des taps sur les barres en N2 (actuellement 18 px — suffisant ?)
- Comportement au toucher vs souris sur les trois niveaux

---

## balance.html — état détaillé

### Ce qui a été revu et corrigé dans cette session
- ✅ Balance SVG recentrée (pivot au milieu exact, bras égaux)
- ✅ Cubes dessinés directement SUR les plateaux (plus d'emojis/images en dessous)
- ✅ N1 — bug didactique corrigé : le plateau le plus bas est toujours le plus lourd
- ✅ N1 — consigne alterne « plus lourd » / « plus léger »
- ✅ N1 — l'élève clique directement sur un plateau (plus de boutons en bas)
- ✅ N2 — cubes de tailles/nombres variés, poids indépendant du visuel (concept de densité)
- ✅ N2 — consigne alterne « plus lourd » / « plus léger », flèche indicatrice supprimée
- ✅ N2 — l'élève clique sur un plateau (Gauche/Droite) + bouton Égal conservé
- ✅ N3 — cubes de base sur LES DEUX plateaux (proportions différentes)
- ✅ N3 — l'élève peut ajouter/enlever sur les deux côtés
- ✅ N3 — impossible d'enlever les cubes de base (minimum = cubes de départ)
- ✅ N3 — distinction visuelle cubes fixes (sombres) vs cubes ajoutés (bleus)
- ✅ Tous les messages utilisent « plateau » (plus de « fléau »)
- ✅ Ancien niveau 3 (comparaison sans balance) supprimé

### Ce qui reste à tester manuellement sur iPad
- Taille des zones de clic sur les plateaux (SVG transparent) — suffisamment grandes ?
- Comportement au toucher vs souris
- Lisibilité des cubes sombres (base) vs bleus (ajoutés) en N3

---

## Apps non encore testées manuellement

Toutes les apps ci-dessous ont été créées et sont fonctionnelles en théorie, mais n'ont pas encore été ouvertes et testées avec toi :

| App | URL locale | Priorité de test |
|-----|-----------|-----------------|
| capacites.html | http://localhost:8766/apps/capacites.html | Prochaine |
| surfaces.html | http://localhost:8766/apps/surfaces.html | |
| comparaison-nombres.html | http://localhost:8766/apps/comparaison-nombres.html | |
| droite-graduee.html | http://localhost:8766/apps/droite-graduee.html | |
| saut-de-nombre.html | http://localhost:8766/apps/saut-de-nombre.html | |
| valeur-position.html | http://localhost:8766/apps/valeur-position.html | |
| vocabulaire.html | http://localhost:8766/apps/vocabulaire.html | |
| comprehension.html | http://localhost:8766/apps/comprehension.html | |

---

## Méthode de travail établie

1. Ouvrir l'app sur http://localhost:8766/apps/[nom].html
2. Tester manuellement et signaler les problèmes
3. Corrections immédiates dans le code
4. Re-tester, puis passer à l'app suivante
5. Mettre à jour apps-review.md au fur et à mesure

---

## Idées en attente (évoquées mais non implémentées)

- **App séparée "comparaison sans balance"** : le niveau 3 supprimé de balance.html (comparer des objets du quotidien par intuition sans instrument) pourrait devenir sa propre app plus tard.
- **Retour sonore** : bip court à la validation (mentionné dans apps-review.md pour plusieurs apps).
- **Droite graduée** : mode glisser-déposer plutôt que simple tap pour plus de précision.
- **Compréhension** : ajouter des textes supplémentaires de genres variés (lettre, texte informatif…).
- **Vocabulaire** : mode dictée avec synthèse vocale (`speechSynthesis`).

---

## Points de vigilance techniques (valables pour toutes les apps)

- `ctx.roundRect` : non disponible sur iOS < 15.4 (longueurs.html, capacites.html)
- Canvas : penser à `ResizeObserver` pour la rotation iPad, pas seulement `window.resize`
- SVG `transform-origin` sur `<g>` : comportement parfois inattendu sur WebKit iOS
- Tolérance des clics/taps : vérifier sur vrai iPad (densité de pixels, palm rejection)
