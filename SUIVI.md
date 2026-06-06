# Suivi du projet — Portail pédagogique
*Dernière mise à jour : 2026-06-06 (audit comparaison-nombres)*

---

## Contexte général

Portail web monopage pour élèves du primaire (iPad tactile), servant de lanceur vers des applications pédagogiques HTML/CSS/JS vanilla. Référentiel : cycles HarmoS (Cycle 1 = 1H–4H, Cycle 2 = 5H–8H).

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
    ├── saut-de-nombre.html           ← auditée ✅ (skills PER + design-portail)
    ├── capacites.html                ← auditée ✅ (skills PER + design-portail)
    ├── surfaces.html                 ← à auditer ⏳
    ├── comparaison-nombres.html      ← auditée ✅ (skills PER + design-portail)
    ├── droite-graduee.html           ← à auditer ⏳
    ├── valeur-position.html          ← à auditer ⏳
    ├── vocabulaire.html              ← à auditer ⏳
    ├── comprehension.html            ← à auditer ⏳
    ├── vertical-calculation.html     ← à auditer ⏳ (ex-calcul-colonne, additions)
    ├── soustraction-colonne.html     ← à auditer ⏳
    ├── balance.html                  ← à auditer ⏳ (non finalisée)
    └── longueurs.html                ← à auditer ⏳ (non finalisée)
```

---

## Corrections appliquées lors de l'audit (2026-06-02)

> **Note :** seule `saut-de-nombre.html` a été auditée avec les skills `pedagogie-per` et `design-portail`. Les corrections ci-dessous ont été appliquées ad hoc lors d'une session de révision précédente, sans passer formellement les skills PER sur chaque app.

Corrections ponctuelles appliquées lors de la session 2026-06-02 :

| Correction | Apps concernées |
|------------|----------------|
| `role="group"` + `aria-label` sur la barre de niveaux/sons/textes | saut-de-nombre (référence), autres non vérifiées |
| `aria-pressed` dans le HTML + mis à jour dynamiquement en JS | saut-de-nombre |
| Suppression des emojis ✅/❌ dans les messages de feedback | saut-de-nombre |
| Feedback mauvaise réponse formatif (nomme la bonne réponse + explication) | saut-de-nombre |
| Corrections issues de l'audit calcul en colonne / soustraction | vertical-calculation, soustraction-colonne |
| Corrections issues de l'audit compréhension | comprehension |
| Corrections issues de l'audit vocabulaire | vocabulaire |
| Corrections issues de l'audit valeur-position | valeur-position |
| Corrections issues de l'audit capacites | capacites |
| Corrections issues de l'audit comparaison-nombres | comparaison-nombres |

---

## Méthode de travail établie

1. Ouvrir l'app sur http://localhost:8766/apps/[nom].html
2. Tester manuellement et signaler les problèmes
3. Corrections immédiates dans le code
4. Passer les skills `pedagogie-per` et `design-portail`
5. Re-tester, puis passer à l'app suivante
6. Mettre à jour apps-review.md au fur et à mesure

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
