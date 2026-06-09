# Template prompt — nouvelle app français

À copier-coller dans Claude Code. Décrire l'app en langage naturel,
puis compléter les champs entre crochets.

---

Lis CLAUDE.md, `apps/_template.html`, `apps/app-base.css` et les deux skills
(`skills/pedagogie-per/SKILL.md` et `skills/design-portail/SKILL.md`) avant de commencer.

Crée `apps/[NOM].html`.

CONTEXTE PÉDAGOGIQUE :
- Cycle HarmoS : [ex. 3H-4H]
- Objectif PER : [ex. L1 15 — identifier des graphèmes]

[Décrire ici l'app en langage naturel : ce que l'élève voit, ce qu'il fait,
comment la réponse est validée, ce qui change entre les niveaux si applicable.]

INTERDICTIONS :
- Ne pas copier d'une app existante
- Ne pas redéfinir ce qui vient de `app-base.css` ou `appUtils.js`
- Ne pas appliquer le title case anglais aux titres français

Ajoute ensuite la carte dans `index.html` (data-domain, data-cycle, data-keywords, animation-delay).
