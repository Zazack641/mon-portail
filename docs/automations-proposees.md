# Automatisations proposées pour Claude Code

Notes issues d'une session de réflexion (2026-07-10), suite à l'installation du plugin
`claude-code-setup@claude-plugins-official`. Rien n'est encore implémenté — ce document
sert de mémo pour reprendre la discussion plus tard, sur n'importe quelle machine.

> ⚠️ Le plugin `claude-code-setup` lui-même ne se synchronise pas via git : il est installé
> au niveau de chaque installation locale de `claude` (voir procédure en bas de ce fichier).
> Ce document, lui, vit dans le dépôt et suit donc avec `git pull`.

---

## Contexte

Le projet a un rituel d'audit récurrent par app (accessibilité WCAG 2.2 AA → veto pédagogie
PER → conformité design-portail, voir procédure d'arbitrage dans `CLAUDE.md`), documenté
app par app dans `SUIVI.md`. Au 2026-07-10, 13 apps restent en attente d'audit v2 :
`surfaces-5h6h.html`, `surfaces-3h4h.html`, `valeur-position.html`, `vertical-calculation.html`,
`sujet-predicat-5h6h.html`, `complement-dizaine-3h4h.html`, `bonne-operation-3h4h.html`,
`coordonnees-5h6h.html`, `doubles-moities-3h4h.html`, `denombrement-1h2h.html`,
`complement-phrase-5h6h.html`, `addition-1h2h.html`, `ou-est-il-1h2h.html`.

---

## 1. Slash command `/audit-app <fichier>` — priorité recommandée

**Ce que ça change concrètement :** aujourd'hui, chaque audit demande un prompt écrit à la
main, et Claude doit relire `CLAUDE.md` + les 3 skills pour reconstituer la procédure à
chaque fois. Avec la commande, il suffit de taper `/audit-app surfaces-5h6h.html` : la
procédure (skills, arbitrage en 3 temps, format d'entrée `SUIVI.md`, branche + PR +
`/code-review` + `./fusionner-audit.sh`) est déjà câblée. Moins de prompt à écrire, moins de
risque de format différent d'une app à l'autre sur les 13 restantes.

## 2. Skill `audit-routine`

**Ce que ça change concrètement :** invisible au quotidien. La différence : pour ajuster le
protocole d'arbitrage ou le format des entrées `SUIVI.md` (ex. mention « À VALIDER PAR
ISAAC »), il suffirait d'éditer `skills/audit-routine/SKILL.md` au lieu de rouvrir
`CLAUDE.md`, qui resterait alors réservé aux règles absolues.

## 3. Hook Pre/PostToolUse sur `Edit(apps/*.html)`

**Ce que ça change concrètement :** c'est le seul qui agirait pendant le travail, sans
intervention. Si une modification redéfinit une couleur en hex au lieu de
`var(--color-units)`, ou duplique une classe déjà fournie par `app-base.css` (interdictions
§1-4 de `CLAUDE.md`), le hook le signalerait avant relecture manuelle du diff.

## 4. Subagent `auditeur-app`

**Ce que ça change concrètement :** change le fonctionnement interne, pas ce qui est tapé.
Actuellement, auditer plusieurs apps dans la même conversation recharge à chaque fois les
~40 entrées déjà écrites dans `SUIVI.md` (volumineuses). Un subagent dédié par fichier
tournerait dans son propre contexte isolé et ne renverrait qu'un résumé — évite qu'une
conversation longue devienne lourde ou perde le fil.

## 5. MCP servers

Rien à ajouter : `Claude_Preview` (déjà utilisé pour la vérification Playwright dans les
audits) couvre le besoin.

---

## Pour reprendre plus tard

Dire à Claude : « reprends `docs/automations-proposees.md`, on avait discuté de X » — le
fichier contient assez de contexte pour repartir sans tout ré-expliquer.

## Installer le plugin `claude-code-setup` sur une autre machine

```
npm install -g --allow-scripts=@anthropic-ai/claude-code @anthropic-ai/claude-code
claude plugin marketplace add anthropics/claude-plugins-official
claude plugin install claude-code-setup@claude-plugins-official
```

(sauter la première ligne si `claude` y est déjà installé).
