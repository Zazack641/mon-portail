# Apps à créer — Portail pédagogique

Ce fichier pilote la création des applications une par une.
Pour chaque app : créer le fichier, mettre à jour les hrefs dans
`index.html`, marquer comme DONE.

---

## Conventions obligatoires (lire avant chaque app)

- Police : Nunito + Source Sans 3 (Google Fonts)
- Fond : #F7F8FA, texte : #1A1A2E, accent : #3B7DD8
- Boutons tactiles : min 48px de hauteur
- Retour portail : <a href="../index.html">← Retour</a>
- Fichier unique HTML/CSS/JS vanilla, pas de framework
- Couleurs valeurs de position (toutes les apps maths avec des chiffres) :
  - Unités : #3B7DD8 (bleu)
  - Dizaines : #D64045 (rouge)
  - Centaines : #3A9E6F (vert)
  - Le cycle recommence pour les milliers
  - Variables CSS : --color-units, --color-tens, --color-hundreds

---

## App 1 — balance.html [DONE]

Fichier à créer : apps/balance.html
Cartes à mettre à jour dans "index.html" :
  - file:///apps/mass-comparison → apps/balance.html
  - file:///apps/mass-comparison-simple → supprimer la carte
  - file:///apps/mass-comparison-advanced → supprimer la carte

Objectif unique : comparer des masses.

Niveaux (sélecteur visible, réglable par l'élève) :
- Niveau 1 (Cycle 1) : 2 objets, trouver le plus lourd
- Niveau 2 (Cycle 1) : ajouter des blocs un par un pour équilibrer
- Niveau 3 (Cycle 2) : plusieurs blocs de poids différents,
  la taille peut être trompeuse

Feedback : vérification globale avec message et bouton Nouvel exercice.

---

## App 2 — longueurs.html [DONE]

Fichier à créer : apps/longueurs.html
Cartes à mettre à jour :
  - file:///apps/length-comparison → apps/longueurs.html
  - file:///apps/length-comparison-advanced → supprimer la carte

Objectif unique : comparer des longueurs.

Niveaux :
- Niveau 1 (Cycle 1) : 2 objets horizontaux, trouver le plus long
- Niveau 2 (Cycle 2) : plusieurs objets, orientations variées

Feedback : vérification globale avec message et bouton Nouvel exercice.

---

## App 3 — capacites.html [DONE]

Fichier à créer : apps/capacites.html
Cartes à mettre à jour :
  - file:///apps/capacity-comparison → apps/capacites.html
  - file:///apps/capacity-comparison-advanced → supprimer la carte

Objectif unique : comparer des capacités.

Niveaux :
- Niveau 1 (Cycle 1) : 2 récipients simples
- Niveau 2 (Cycle 2) : plusieurs récipients de formes différentes

Feedback : vérification globale avec message et bouton Nouvel exercice.

---

## App 4 — surfaces.html [DONE]

Fichier à créer : apps/surfaces.html
Cartes à mettre à jour :
  - file:///apps/area-comparison → apps/surfaces.html
  - file:///apps/area-comparison-advanced → supprimer la carte

Objectif unique : comparer des aires.

Niveaux :
- Niveau 1 (Cycle 1) : 2 formes simples sur grille carrée
- Niveau 2 (Cycle 2) : plusieurs formes, carrés et cercles mélangés

Feedback : vérification globale avec message et bouton Nouvel exercice.

---

## App 5 — comparaison-nombres.html [DONE]

Fichier à créer : apps/comparaison-nombres.html
Cartes à mettre à jour :
  - file:///apps/number-comparison → apps/comparaison-nombres.html

Objectif unique : relation d'ordre entre nombres (< > =).
Couleurs valeurs de position obligatoires.

Niveaux :
- Niveau 1 : nombres jusqu'à 100
- Niveau 2 : nombres jusqu'à 1000

Feedback : vérification immédiate, bouton Nouvel exercice.

---

## App 6 — droite-graduee.html [DONE]

Fichier à créer : apps/droite-graduee.html
Cartes à mettre à jour :
  - file:///apps/arrow-numbers → apps/droite-graduee.html

Objectif unique : situer un nombre sur une droite graduée.
Couleurs valeurs de position obligatoires.

Niveaux :
- Niveau 1 : droite jusqu'à 100, graduations régulières
- Niveau 2 : droite jusqu'à 1000, graduations à interpréter

Feedback : vérification immédiate, bouton Nouvel exercice.

---

## App 7 — saut-de-nombre.html [DONE]

Fichier à créer : apps/saut-de-nombre.html
Cartes à mettre à jour :
  - file:///apps/number-jump → apps/saut-de-nombre.html

Objectif unique : ajouter ou enlever une unité, dizaine ou centaine.
Couleurs valeurs de position obligatoires.

Niveaux :
- Niveau 1 : additions et soustractions de 1 et 10
- Niveau 2 : additions et soustractions de 1, 10 et 100

Boutons : +1 / -1 / +10 / -10 / +100 / -100
Feedback : vérification immédiate, bouton Nouvel exercice.

---

## App 8 — valeur-position.html [DONE]

Fichier à créer : apps/valeur-position.html
Cartes à mettre à jour :
  - file:///apps/tens-extractor → apps/valeur-position.html

Objectif unique : identifier le rang d'un chiffre dans un nombre.
Couleurs valeurs de position obligatoires.

Niveaux :
- Niveau 1 : nombres jusqu'à 99, unités et dizaines
- Niveau 2 : nombres jusqu'à 999, centaines incluses

Feedback : vérification immédiate, bouton Nouvel exercice.

---

## App 9 — vocabulaire.html [DONE]

Fichier à créer : apps/vocabulaire.html
Cartes à mettre à jour :
  - file:///apps/vocabulary → apps/vocabulaire.html

Objectif unique : écrire des mots selon leur graphème.

Sons disponibles (boutons de sélection) :
- ill / ail / un / ain-aim-ein / oin / révision

Feedback : vérification immédiate, bouton Nouvel exercice.

---

## App 10 — comprehension.html [DONE]

Fichier à créer : apps/comprehension.html
Cartes à mettre à jour :
  - file:///apps/reading-comprehension → apps/comprehension.html

Objectif unique : compréhension de texte.

Textes disponibles :
- Le kiosque
- Léonard de Vinci

Feedback : vérification globale à la fin du questionnaire.

---

## Déjà fait

- calcul-colonne.html [DONE] — ne pas toucher
