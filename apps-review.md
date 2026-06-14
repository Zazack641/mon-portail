# Revue des apps — Portail pédagogique

---

## balance.html

**Tests à faire sur iPad :**
1. Vérifier que la balance se penche visuellement dans le bon sens dès l'affichage d'un exercice de niveau 1.
2. Tester les boutons « + Ajouter un bloc » / « − Enlever un bloc » au doigt : taille suffisante, réponse immédiate, pas de double-tap involontaire.
3. S'assurer que le passage entre les 3 niveaux via les boutons réinitialise bien l'état (pas de blocs résiduels, feedback effacé).
4. Vérifier la lisibilité des emojis objets et des étiquettes de masse (niveau 3) sur écran 9,7 pouces.
5. Tester le flux complet : réponse → feedback → « Nouvel exercice » → nouvel état propre.

**Doutes techniques :**
- L'animation de rotation du fléau SVG utilise `transform-origin: 50% 0%` — à valider sur Safari/WebKit iOS (certaines versions ignorent le transform-origin sur des `<g>` SVG).
- Le niveau 2 réutilise `mass` comme nombre de blocs : avec des objets lourds (ex. haltère masse=8), le plateau de droite peut déborder visuellement si l'élève dépasse 8 blocs — pas de cap visuel.
- Le bouton « Vérifier » du niveau 3 est partagé avec le niveau 2 via un seul listener, ce qui crée un branchement conditionnel fragile.

**Cohérence didactique :**
- Niveau 1 → 2 → 3 : progression logique (perception directe → action d'équilibrage → raisonnement sur grandeur trompeuse). L'objectif est bien isolé à chaque niveau.
- Niveau 2 : l'élève agit sur la balance sans unité de mesure explicite, ce qui est fidèle à l'approche Cycle 1 (comparaison directe avant mesure).
- Niveau 3 : la mention « la taille peut être trompeuse » est pédagogiquement solide, mais les masses affichées après vérification (g, kg) peuvent nécessiter une lecture guidée pour des élèves de début C2.

**Suggestions d'amélioration (PER) :**
- Ajouter un retour sonore simple (bip court) en complément du feedback visuel, utile pour les élèves dyslexiques.
- Niveau 2 : permettre de voir le nombre de blocs posés en temps réel à côté du plateau pour renforcer la correspondance terme-à-terme (compétence MSN 21 C1).
- Niveau 3 : proposer un tri des objets par masse après la vérification (classement du plus léger au plus lourd) pour ancrer la notion d'ordre (MSN 21 C2).
- Envisager un niveau intermédiaire avec des unités explicites (grammes) pour assurer la transition C1 → C2.

---

## longueurs.html

**Tests à faire sur iPad :**
1. Vérifier que les barres sont bien lisibles sur canvas en mode portrait et paysage (redimensionnement dynamique).
2. Tester le niveau 2 : s'assurer que les barres inclinées sont perceptibles comme plus longues/courtes que les barres droites, sans ambiguïté visuelle.
3. Vérifier que les boutons de choix (A, B, C, D) sont suffisamment larges au doigt (min 48px hauteur, min 120px largeur).
4. Tester le passage niveau 1 → niveau 2 plusieurs fois d'affilée : vérifier qu'aucun état résiduel ne persiste.
5. Vérifier la lisibilité des labels de barre (lettres A/B/C/D) sur fond blanc canvas.

**Doutes techniques :**
- `ctx.roundRect` n'est pas disponible sur tous les navigateurs WebKit anciens (iOS < 15.4) — peut tomber en erreur silencieuse et ne pas dessiner les barres.
- Le canvas se redimensionne via `window.resize` mais pas au changement d'orientation sur iPad — un event `orientationchange` ou `ResizeObserver` serait plus fiable.
- Les angles aléatoires en niveau 2 peuvent parfois générer des barres qui sortent de la zone visible si `len` est grand et `angle` élevé — pas de clipping défensif.

**Cohérence didactique :**
- Niveau 1 : comparaison directe de 2 barres horizontales — correspond bien à MSN 21 C1 (comparaison directe sans instrument).
- Niveau 2 : orientations variées introduit la notion que la longueur est indépendante de l'orientation — concept clé du C2 (MSN 21).
- L'absence d'unité de mesure est intentionnelle et correcte pour les deux niveaux : la comparaison est perceptive, pas numérique.

**Suggestions d'amélioration (PER) :**
- Ajouter une animation de « superposition » des barres après réponse pour matérialiser la comparaison directe (geste de mesurage, MSN 21 C1).
- Niveau 2 : permettre à l'élève de faire glisser les barres pour les aligner — plus proche de la comparaison directe instrumentée.
- Ajouter un niveau 3 avec une règle graduée pour mesurer et comparer (transition vers la mesure instrumentée, MSN 21 C2).

---

## capacites.html

**Tests à faire sur iPad :**
1. Vérifier que les récipients dessinés (verre, bouteille, bol, seau, pichet) sont reconnaissables et bien proportionnés sur petit écran.
2. Tester le niveau 2 avec 4 récipients : vérifier que la taille des canvas individuels ne déborde pas sur les bords de l'écran (flex wrap en mode portrait).
3. Tester le tap sur chaque récipient : la bordure de sélection doit apparaître immédiatement sans délai perceptible.
4. Vérifier le bouton « Vérifier » : bien désactivé tant qu'aucun récipient n'est sélectionné.
5. Vérifier que le feedback indique clairement quel récipient était le bon (bordure verte).

**Doutes techniques :**
- `ctx.roundRect` utilisé dans la forme « pichet » — même risque de compatibilité iOS < 15.4 que pour longueurs.html.
- Le remplissage du bol utilise un `clip()` elliptique — sur certains navigateurs mobiles, le rendu des courbes clippées peut être pixelisé.
- La taille des canvas individuels est calculée via `window.innerWidth` mais pas recalculée au redimensionnement — en cas de rotation de l'iPad, les récipients peuvent être trop petits ou trop grands.
- La forme « bouteille » utilise une approximation rectangulaire pour le remplissage (pas de courbe) : visuellement, l'eau ne suit pas la forme du goulot.

**Cohérence didactique :**
- Le niveau 1 (2 récipients, mêmes proportions max) isole bien la comparaison visuelle directe — conforme MSN 21 C1.
- Le niveau 2 (3-4 récipients de formes différentes) introduit la décentration perceptive (un récipient large et peu rempli peut contenir moins qu'un récipient étroit et plein) — concept central MSN 21 C2.
- L'élève peut travailler seul : la consigne est claire et le feedback est immédiat.

**Suggestions d'amélioration (PER) :**
- Ajouter une animation de versement (l'eau « coule » d'un récipient à l'autre) pour matérialiser la conservation des quantités — geste fondamental MSN 21 C1.
- Niveau 2 : après vérification, afficher les volumes ordonnés (du plus petit au plus grand) pour renforcer la notion de classement (MSN 21 C2).
- Proposer un niveau 3 où l'élève choisit dans quel récipient verser un volume donné pour qu'il soit à moitié plein — mobilise la relation forme/capacité.

---

## surfaces.html

**Tests à faire sur iPad :**
1. Niveau 1 : vérifier que la grille est bien visible et que les cases sont suffisamment grandes pour être comptées au doigt sans erreur (min 20×20px recommandé).
2. Niveau 2 : vérifier que les 4 formes s'affichent côte à côte sans débordement en mode portrait sur iPad 9,7 pouces (flex-wrap activé).
3. Tester la sélection d'une forme : la bordure de sélection doit être clairement visible (contraste suffisant avec le fond bleu pâle).
4. Vérifier que le bouton « Vérifier » reste bien désactivé tant qu'aucune forme n'est sélectionnée.
5. Tester plusieurs exercices de niveau 2 consécutifs : s'assurer que les aires générées aléatoirement ne sont pas trop proches (risque de réponse ambiguë).

**Doutes techniques :**
- Niveau 2 : les aires sont calculées sur des ratios (0–1) sans contrainte de différence minimale — deux formes peuvent avoir des aires très proches et rendre l'exercice ambigu visuellement.
- Le triangle en niveau 2 utilise `baseRatio` et `hRatio` indépendants : des valeurs extrêmes peuvent produire un triangle très aplati, difficile à distinguer d'un rectangle.
- Niveau 1 : la contrainte `Math.abs(s.area - usedAreas[0]) > 1` peut boucler longtemps si les aires générées sont toutes proches — pas de limite d'itération.

**Cohérence didactique :**
- Niveau 1 (grille carrée) : conforme à MSN 21 C1 — la comparaison par comptage de cases est le premier geste de mesurage des surfaces.
- Niveau 2 (formes mixtes sans grille) : conforme à MSN 21 C2 — nécessite une estimation visuelle et une décentration de la forme vers la grandeur.
- L'élève peut travailler seul : les formes sont nommées (A, B, C…) et la consigne est unimodale.

**Suggestions d'amélioration (PER) :**
- Niveau 1 : afficher le nombre de cases après vérification pour renforcer le lien entre comptage et aire (MSN 21 C1 — quantification).
- Niveau 2 : après vérification, superposer les formes (overlay transparent) pour permettre la comparaison directe — geste fondamental de la mesure d'aire.
- Ajouter un niveau 3 : surfaces non rectangulaires sur grille (formes en L, escaliers) pour travailler la décomposition d'aires (MSN 21 C2).

---

## comparaison-nombres.html

**Tests à faire sur iPad :**
1. Vérifier que les trois boutons symboles (<, =, >) sont bien espacés et suffisamment grands pour être tapés séparément sans erreur (min 56×56px).
2. Vérifier que les couleurs des chiffres (bleu=unités, rouge=dizaines, vert=centaines) sont lisibles sur fond blanc, y compris pour les élèves daltoniens.
3. Tester le niveau 2 avec des nombres à 3 chiffres : vérifier que les grands chiffres (font-size clamp) ne débordent pas du cadre sur petit écran.
4. Tester le flux : réponse → feedback → « Nouvel exercice » → nouvel état propre, symboles réactivés.
5. Vérifier que la légende des couleurs s'adapte bien (2 entrées en niveau 1, 3 en niveau 2).

**Doutes techniques :**
- Le niveau 1 génère des nombres entre 10 et 99, mais la légende affiche « Dizaines / Unités » — correct. Le niveau 2 entre 100 et 999 affiche la centaine. Vérifier que la couleur de la centaine (vert) ne crée pas de confusion avec la couleur du bouton « Nouvel exercice » (même vert #0F7860).
- Le bouton `=` est proposé mais ne peut jamais être la bonne réponse (la génération garantit `a ≠ b`) — un élève qui choisit systématiquement `=` ne sera jamais récompensé, mais il n'y a pas de message explicatif sur pourquoi `=` n'est jamais correct.

**Cohérence didactique :**
- La comparaison est unimodale (un seul geste de réponse par exercice) et le feedback est immédiat — conforme à l'usage autonome sans enseignant.
- Les couleurs par rang de valeur de position renforcent la convention définie dans CLAUDE.md et cohérente avec les autres apps maths.
- Le niveau 1 (10–99) correspond bien à MSN 21 C2 début ; le niveau 2 (100–999) à MSN 21 C2 milieu.

**Suggestions d'amélioration (PER) :**
- Afficher le nombre en lettres sous le nombre en chiffres pour renforcer la lecture des grands nombres (compétence de communication mathématique, MSN C2).
- Ajouter un niveau 3 avec des nombres jusqu'à 9999 pour les élèves avancés de fin C2.
- Proposer une variante où c'est l'élève qui choisit deux nombres et qui doit les ordonner (construction plutôt que reconnaissance).

---

## place-le-nombre-c2.html

**Tests à faire sur iPad :**
1. Tester le tap et le touch sur la droite : vérifier que le marqueur apparaît exactement là où l'élève a touché (pas de décalage dû au scroll ou à la densité de pixels).
2. Vérifier que la tolérance de ±3 (niveau 1) et ±20 (niveau 2) est perceptible à l'œil sur l'écran — ni trop permissive (on accepte n'importe quoi) ni trop sévère (l'élève est pénalisé malgré un placement correct).
3. Tester le niveau 2 : vérifier que les petites graduations tous les 10 sont visibles mais pas trop chargées visuellement.
4. Vérifier que le marqueur vert (correction) et le marqueur bleu (réponse élève) sont lisibles simultanément quand ils sont proches l'un de l'autre.
5. Tester la rotation de l'iPad : le canvas doit se redimensionner correctement et la droite doit rester proportionnelle.

**Doutes techniques :**
- La tolérance en valeur absolue (±3 unités en niveau 1) est calculée sur la valeur arrondie de la position — si l'élève tape très près d'une graduation mais pas dessus, l'arrondi peut l'éloigner de la bonne valeur.
- Sur Safari iOS, `canvas.getBoundingClientRect()` et le ratio `canvas.width / rect.width` peuvent ne pas tenir compte du `devicePixelRatio`, ce qui peut provoquer un décalage entre le tap et le marqueur.
- Le générateur de la cible au niveau 1 exclut les multiples de 10 — correct pédagogiquement, mais si `nlStart` et `nlEnd` sont très proches, la liste `inner` peut être vide et `target` serait `undefined`.

**Cohérence didactique :**
- Niveau 1 : placer un nombre non-graduation sur une droite 0–100 est conforme à MSN 21 C2 (lecture de la droite numérique graduée).
- Niveau 2 : droite jusqu'à 1000 avec graduations intermédiaires tous les 10 — demande d'interpoler entre deux graduations, compétence clé MSN 21 C2 fin.
- Le geste de pointer sur la droite est plus naturel sur iPad que de saisir un nombre — bien adapté au tactile.

**Suggestions d'amélioration (PER) :**
- Afficher une flèche glissable plutôt qu'un simple tap, pour que l'élève puisse ajuster sa réponse avant de valider (geste de précision, MSN 21 C2).
- Après vérification, afficher la distance entre la réponse et la bonne position pour permettre à l'élève d'auto-évaluer son écart (métacognition).
- Ajouter un mode inverse : l'enseignant place un marqueur sur la droite, l'élève doit lire et écrire le nombre correspondant (MSN 21 C2 — lecture de la droite).

---

## saut-de-nombre.html

**Tests à faire sur iPad :**
1. Vérifier que les 4 boutons (niveau 1) et les 6 boutons (niveau 2) sont tous suffisamment grands et bien espacés pour être tapés sans erreur au doigt.
2. Tester que le nombre courant se met à jour immédiatement après chaque tap sans délai perceptible.
3. Vérifier que les boutons qui feraient sortir le nombre de [0, 999] sont bien désactivés (grayed out) en temps réel.
4. Tester le cas où l'élève atteint exactement le nombre cible — le feedback de succès doit s'afficher automatiquement sans avoir à appuyer sur « Vérifier ».
5. Vérifier le comportement du bouton « Vérifier » quand la réponse est incorrecte : il doit afficher un feedback d'erreur mais permettre de continuer à jouer (pas de blocage).

**Doutes techniques :**
- Le générateur de cible peut produire un `target` hors de [0, 999] dans des cas extrêmes (start proche des bords + sauts successifs dans le même sens) — la vérification `target < 0 || target > 999` rattrape ça, mais la boucle `do/while` pourrait tourner longtemps sans converger.
- La grille CSS (`l1` / `l2`) change dynamiquement via `className` — vérifier que le changement de classe via `jumpGrid.className = 'jump-grid ' + ...` ne laisse pas de classes résiduelles.
- Sur iOS, les boutons avec `border` colorée peuvent avoir un rendu légèrement différent (antialiasing) — tester visuellement la lisibilité des couleurs bleu/rouge/vert.

**Cohérence didactique :**
- Niveau 1 (+1/−1, +10/−10) : correspond exactement à MSN 21 C2 — décomposition et recomposition des nombres par ajout/retrait d'unités et dizaines.
- Niveau 2 (ajout des centaines) : mobilise la valeur de position sur 3 rangs — conforme à MSN 21 C2 fin.
- La détection automatique de la cible atteinte (sans validation manuelle) renforce la compréhension que le résultat est le but, pas le bouton.
- La possibilité de continuer après une erreur (feedback non bloquant) est pédagogiquement bonne pour l'autonomie.

**Suggestions d'amélioration (PER) :**
- Afficher une trace des sauts effectués (ex. « 45 → +10 → 55 → −1 → 54 ») pour rendre la démarche visible et favoriser la réflexion sur la stratégie (MSN 21 C2 — raisonnement mathématique).
- Proposer un mode « défi » où l'élève doit atteindre la cible en un nombre minimal de sauts (optimisation, MSN C2 fin).
- Ajouter une visualisation sur droite graduée des sauts effectués pour ancrer le geste numérique dans la représentation spatiale.

---

## valeur-position.html

**Tests à faire sur iPad :**
1. Vérifier que le chiffre surligné est clairement distingué des autres (couleur vive + soulignement + drop-shadow) sur fond blanc.
2. Tester les 3 niveaux d'affichage du tableau de valeurs de position : vérifier que les colonnes sont équilibrées et que les labels (Centaines / Dizaines / Unités) sont lisibles.
3. Vérifier que les boutons de choix (2 en niveau 1, 3 en niveau 2) sont suffisamment larges pour un tap précis.
4. Tester plusieurs exercices consécutifs : s'assurer que le rang mis en évidence varie bien (pas toujours les unités) et que tous les rangs sont couverts.
5. Vérifier que le feedback cite correctement le chiffre et le rang (ex. « Le chiffre 4 est dans les dizaines de 47 »).

**Doutes techniques :**
- La propriété CSS `filter: drop-shadow(0 0 12px currentColor)` peut être mal rendue sur certains navigateurs WebKit anciens (iOS < 14) — tester sur vrai appareil.
- `digitIdx >= 0 ? digits[digitIdx] : '0'` dans le tableau : pour un nombre à 2 chiffres, `digitIdx` pour la centaine serait -1 → affichera `'0'`, ce qui est correct, mais uniquement en niveau 1 (nombres ≤ 99). Vérifier qu'aucun nombre à 2 chiffres n'apparaît en niveau 2 (min = 100 garanti par `randInt(100, 999)`).
- Le tableau affiche le chiffre isolé dans chaque rang, pas la valeur de position (ex. « 4 » et non « 40 ») — choix pédagogique à valider avec l'enseignant.

**Cohérence didactique :**
- La question demande le nom du rang (unités/dizaines/centaines), pas la valeur positionnelle (ex. 40 pour le 4 des dizaines) — niveau adapté à MSN 21 C2 début (identification du rang).
- Le tableau de valeurs de position affiché en parallèle aide l'élève à vérifier sa réponse et à construire une représentation mentale — bon support visuel.
- L'élève peut travailler seul : la consigne est claire (« Le chiffre X est dans les… ? »), le feedback est immédiat et explicatif.

**Suggestions d'amélioration (PER) :**
- Ajouter un deuxième type de question : « Quelle est la valeur du chiffre X dans le nombre Y ? » (ex. répondre 40 et non « dizaines ») — MSN 21 C2 milieu.
- Proposer un mode où l'élève décompose lui-même le nombre (ex. 347 = ___ centaines + ___ dizaines + ___ unités) avec des champs à remplir — plus actif que le QCM.
- Ajouter un niveau 3 avec des nombres jusqu'à 9999 (dizaines de milliers) pour les élèves avancés.

---

## vocabulaire.html

**Tests à faire sur iPad :**
1. Vérifier que tous les sons (ill, ail, un, ain/aim/ein, oin, révision) se sélectionnent correctement et que la banque de mots change bien.
2. Tester le mode révision : vérifier que des mots de différents sons s'affichent bien en alternance.
3. Vérifier que le blank (___) dans l'affichage du mot se remplace bien par le bon graphème après réponse.
4. Tester les boutons de choix sur iPad : taille suffisante, pas de sélection involontaire entre deux graphèmes proches.
5. Vérifier que les emojis s'affichent correctement à grande taille (120px) sur iOS — certains emojis complexes peuvent être rognés.

**Doutes techniques :**
- La détection du son pour le mode révision (`Object.keys(WORDS).find(...)`) peut échouer si le mot n'est pas trouvé — renvoie `'ill'` par défaut, ce qui peut produire de mauvais distracteurs.
- Les distracteurs sont générés depuis `GRAPHEME_POOLS` hardcodé par son — en mode révision avec un son détecté dynamiquement, les distracteurs peuvent ne pas être idiomatiques (ex. un mot en « un » avec des distracteurs de la famille « ill »).
- Le `state.answered` n'est jamais remis à `false` dans `setup()` — si l'élève clique très vite sur « Autre mot » juste après avoir commencé à répondre, la réponse peut être ignorée.
- Quelques mots ont des blanks non standards (ex. `'jeûne — j___'`) qui produisent un affichage bizarre dans `word-display` si le split sur `___` crée plus de 2 parties.

**Cohérence didactique :**
- L'objectif est bien isolé : identifier le graphème d'un son dans un mot, à partir d'un indice visuel (emoji) et sémantique (hint). Conforme à L1 21 C1 (reconnaissance des correspondances phonème-graphème).
- Les sons choisis (ill, ail, un, ain/aim/ein, oin) sont parmi les plus fréquents et les plus problématiques pour les élèves de Cycle 1, conformément au PER L1 21.
- Le mode révision est un excellent outil de consolidation transversale.
- Les distracteurs par son (ex. « ain / aim / ein » pour un même son) entraînent bien la distinction orthographique des graphèmes à même valeur phonétique.

**Suggestions d'amélioration (PER) :**
- Ajouter un son par séance (sons nouveaux : « eau/au/o », « ou », « gn ») pour étendre la banque au fil de l'année scolaire (L1 21 C1).
- Proposer un mode dictée : l'élève entend le mot (synthèse vocale via `speechSynthesis`) et doit choisir le bon graphème sans voir l'emoji — renforce le lien oral/écrit (L1 21 C1).
- Ajouter un compteur de réussite par son (ex. « 5/7 mots corrects en ill ») pour que l'élève voit sa progression.

---

## comprehension.html

**Tests à faire sur iPad :**
1. Vérifier que le texte est lisible sur iPad sans scroll horizontal (font-size clamp, line-height 1.85) — tester en mode portrait et paysage.
2. Tester le flux complet : lecture → clic sur « J'ai lu » → 5 questions → résultat → recommencer / changer de texte.
3. Vérifier que la barre de progression avance correctement à chaque question (0% au début, 100% à la fin).
4. Tester les deux textes : s'assurer que le changement de texte réinitialise bien score, questions et phase.
5. Vérifier que le feedback par question (explication) est bien lisible et ne déborde pas sur les boutons de réponse.

**Doutes techniques :**
- Le bouton « Changer de texte » switche automatiquement vers l'autre texte — si l'on ajoute un troisième texte plus tard, cette logique binaire (`kiosque` ↔ `leonard`) ne fonctionnera plus.
- Le texte HTML est injecté via `innerHTML` (pour le formatage en italique) — pas de risque XSS ici car les données sont statiques dans le code, mais à surveiller si la banque de textes est externalisée.
- L'état `answered` (tableau) est calculé mais jamais utilisé dans la logique de résultat (seul `score` l'est) — code mort mineur.

**Cohérence didactique :**
- Structure en 3 phases (lecture → questions → résultat) : conforme à une séquence de compréhension guidée (L1 25 C2 — comprendre des textes).
- Les 5 questions par texte couvrent différents niveaux de compréhension : littéral (retrouver une information explicite), inférentiel (comprendre un mot de contexte), global (comprendre pourquoi/comment).
- Le feedback par question cite le passage du texte — aide l'élève à ancrer la réponse dans le texte (stratégie de lecture active).
- L'élève peut relire le texte en recommençant — la non-linéarité favorise l'autonomie.

**Suggestions d'amélioration (PER) :**
- Ajouter un bouton « Revoir le texte » depuis la phase questions, pour que l'élève puisse consulter le texte sans recommencer (stratégie de relecture, L1 25 C2).
- Proposer des textes de niveaux différents (court/simple pour début C2, long/complexe pour fin C2) et les lier au cycle dans les métadonnées.
- Ajouter 2-3 textes supplémentaires de genres variés : texte informatif, récit de fiction, lettre (L1 25 C2 — diversité des types de textes).
- Envisager un mode où l'élève peut surligner des passages du texte pour justifier ses réponses (annotation, L1 25 C2 fin).

---
