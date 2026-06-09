# Template prompt — nouvelle app math (canvas/SVG)

À copier-coller dans Claude Code. Remplacer les valeurs entre crochets.

---

Lis CLAUDE.md, `apps/_template.html`, `apps/app-base.css` et les deux skills
(`skills/pedagogie-per/SKILL.md` et `skills/design-portail/SKILL.md`) avant de commencer.

Crée `apps/[NOM].html`.

CONTEXTE PÉDAGOGIQUE :
- Cycle HarmoS : [ex. 5H-6H]
- Objectif PER : [ex. MSN 21 — comparer des nombres jusqu'à 1000]

ZONE DE JEU :
- [décrire : canvas, SVG, grille, boutons de choix…]

NIVEAUX (si applicable) :
- N1 : [décrire]
- N2 : [décrire]
- N3 : [décrire si nécessaire]

GÉNÉRATION DES EXERCICES :
- [décrire la logique de génération aléatoire]

SPÉCIFICITÉS DE CETTE APP :
- [tout ce qui s'écarte du comportement par défaut du template]

INTERDICTIONS :
- Ne pas copier d'une app existante
- Ne pas redéfinir ce qui vient de `app-base.css` ou `appUtils.js`
- Ne pas inventer de conventions de couleur : utiliser `var(--color-units)`, `var(--color-tens)`, `var(--color-hundreds)`

Ajoute ensuite la carte dans `index.html` (data-domain, data-cycle, data-keywords, animation-delay).
