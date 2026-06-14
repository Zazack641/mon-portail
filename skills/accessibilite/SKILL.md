## Référentiel
WCAG 2.2 niveau AA (voir docs/accessibilite/wcag22-resume.md).
Pour ce projet, certains critères sont renforcés au-delà du standard AA
en raison du public cible.

## Motricité (WCAG 2.5.8 renforcé)
- Éléments principaux (boutons de réponse, boutons d'action) : 64×64px minimum
- Éléments secondaires (retour, changement de niveau) : 44×44px minimum
- Espacement minimum entre deux zones tactiles adjacentes : 12px (WCAG 2.5.8)
- Aucun geste complexe comme seule option (WCAG 2.5.1 et 2.5.7) : pas de
  glisser-déposer exclusif, pas de double-tap requis, pas de geste multi-doigts
- Pas de minuterie ni contrainte de vitesse
- Feedback visuel immédiat au touch : changement d'état visible sans délai
  perceptible
- États :hover/:active/:focus clairement visibles (WCAG 2.4.7 et 2.4.12)

## Visuo-spatial (WCAG 1.4.x renforcé)
- Contraste texte : ratio minimum 4,5:1 (WCAG 1.4.3), viser 7:1 pour les
  éléments critiques
- Contraste composants non textuels : ratio minimum 3:1 (WCAG 1.4.11)
- Jamais communiquer une information par la couleur seule : toujours doubler
  avec une forme, une icône ou un texte
- Un seul élément actif ou zone d'attention à la fois : éviter les mises en
  page avec plusieurs zones qui changent simultanément
- Taille de texte minimum : 18px pour les consignes, 22px pour les éléments
  interactifs
- Interlignage minimum : 1.5 (WCAG 1.4.12)
- Pas d'éléments décoratifs animés en arrière-plan pendant qu'une tâche
  est en cours
- Toujours respecter prefers-reduced-motion : envelopper toute animation CSS
  dans @media (prefers-reduced-motion: no-preference)
- Repères positionnels stables : score, niveau, consigne restent au même
  emplacement pendant toute la session

## Feedback (WCAG 3.3.1 renforcé)
- Toujours au minimum deux canaux simultanés : visuel + sonore
  (feedbackUtils.js le fournit déjà)
- Le message reste affiché jusqu'à une action explicite de l'élève,
  pas de disparition automatique
- En cas d'erreur : indiquer quoi faire, pas seulement signaler l'échec

## Ce qui peut diverger selon les utilisateurs
- Les animations de confettis (launchConfetti) sont conservées par défaut
  mais doivent être supprimées si prefers-reduced-motion est activé
- Le glisser-déposer peut exister comme option supplémentaire (confort),
  mais une alternative par tap simple doit toujours exister en parallèle
