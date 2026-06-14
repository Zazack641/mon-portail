# Accessibilité — Référentiel WCAG 2.2 (résumé pour le projet)

Source : W3C Web Content Accessibility Guidelines (WCAG) 2.2, octobre 2023
URL : https://www.w3.org/TR/WCAG22/
Niveau cible : AA

Ce document distille les critères WCAG 2.2 pertinents pour des applications
tactiles iPad destinées à des élèves avec déficience motrice et troubles
visuo-spatiaux. Les critères non applicables au contexte (ex. vidéo, CAPTCHA,
authentification) sont omis.

---

## Perception (Principe 1)

### 1.4.3 Contraste minimum (AA)
Texte normal : ratio 4,5:1 minimum.
Texte large (≥18px normal ou ≥14px gras) : ratio 3:1 minimum.
Éléments graphiques et composants d'interface : ratio 3:1 minimum.

### 1.4.4 Redimensionnement du texte (AA)
Le texte doit pouvoir être agrandi jusqu'à 200% sans perte de contenu
ni de fonctionnalité.

### 1.4.10 Reflow (AA)
Le contenu doit s'afficher sans défilement horizontal à 320px de largeur
CSS. Pas de mise en page qui casse sur petit écran.

### 1.4.11 Contraste des composants non textuels (AA)
Les bordures de champs, icônes et indicateurs d'état doivent avoir un
ratio de contraste 3:1 par rapport au fond.

### 1.4.12 Espacement du texte (AA)
Le contenu doit rester lisible si l'utilisateur applique :
- Interlignage ≥ 1.5× la taille de police
- Espacement après paragraphe ≥ 2× la taille de police
- Espacement des lettres ≥ 0.12× la taille de police
- Espacement des mots ≥ 0.16× la taille de police

---

## Utilisabilité (Principe 2)

### 2.1.1 Clavier (A)
Toutes les fonctionnalités accessibles au pointeur doivent l'être aussi
au clavier. Sur iPad, cela inclut les claviers externes Bluetooth.

### 2.4.7 Focus visible (AA)
Tout élément interactif doit avoir un indicateur de focus visible lors
de la navigation clavier.

### 2.4.11 Focus non masqué (AA, nouveau en 2.2)
Quand un composant reçoit le focus, il ne doit pas être entièrement
masqué par du contenu superposé (headers sticky, overlays).

### 2.4.12 Apparence du focus (AA, nouveau en 2.2)
L'indicateur de focus doit avoir une aire minimale (périmètre du
composant × 2px) et un ratio de contraste de 3:1 par rapport à
l'état non focalisé.

### 2.5.1 Gestes au pointeur (A)
Toute fonctionnalité utilisant un geste multi-points ou un tracé
doit avoir une alternative activable par un pointeur simple (tap).

### 2.5.3 Étiquette dans le nom (A)
Pour les composants avec étiquette visible, le nom accessible
(aria-label) doit contenir le texte visible.

### 2.5.7 Mouvements de glissement (AA, nouveau en 2.2)
Toute action nécessitant un glissement (drag) doit avoir une
alternative par pointeur simple, sauf si le glissement est essentiel.

### 2.5.8 Taille de cible minimum (AA, nouveau en 2.2)
Taille minimale WCAG AA : 24×24 pixels CSS.
Exception : si l'espacement autour de la cible est ≥ 24px dans
toutes les directions.
Bonne pratique recommandée : 44×44px (Apple HIG, recherches UX).
Pour ce projet (déficience motrice) : 44×44px minimum absolu,
64×64px recommandé pour les éléments principaux.

---

## Compréhension (Principe 3)

### 3.2.1 Au focus (A)
Recevoir le focus ne doit pas déclencher de changement de contexte
automatique (pas de navigation automatique, pas de soumission).

### 3.2.2 À la saisie (A)
Modifier un composant ne doit pas déclencher de changement de contexte
sans avertissement préalable.

### 3.3.1 Identification des erreurs (A)
Si une erreur est détectée, l'élément concerné est identifié et
l'erreur décrite en texte. Le message dit quoi faire, pas seulement
qu'il y a une erreur.

### 3.3.2 Étiquettes ou instructions (A)
Les champs et contrôles interactifs ont une étiquette ou des
instructions claires avant interaction.

---

## Robustesse (Principe 4)

### 4.1.2 Nom, rôle, valeur (A)
Tous les composants d'interface ont un nom et un rôle déterminables
par les technologies d'assistance. Les états (sélectionné, désactivé,
étendu) sont exposés via aria-* et mis à jour dynamiquement.

---

## Critères non applicables à ce projet
- 1.2.x : médias temporels (pas de vidéo/audio autonome)
- 2.4.1 : liens d'évitement (apps single-page)
- 3.3.3 / 3.3.4 : suggestion et prévention des erreurs (pas de
  transactions financières ou juridiques)
- 3.3.7 / 3.3.8 : authentification (pas de login)
