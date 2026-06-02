# Suivi du projet — Portail pédagogique
*Dernière mise à jour : 2026-06-02*

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
    ├── capacites.html                ← auditée ✅
    ├── surfaces.html                 ← auditée ✅
    ├── comparaison-nombres.html      ← auditée ✅
    ├── droite-graduee.html           ← auditée ✅
    ├── valeur-position.html          ← auditée ✅
    ├── vocabulaire.html              ← auditée ✅
    ├── comprehension.html            ← auditée ✅
    ├── vertical-calculation.html     ← auditée ✅ (ex-calcul-colonne, additions)
    ├── soustraction-colonne.html     ← auditée ✅
    ├── balance.html                  ← EN COURS, non finalisée
    └── longueurs.html                ← EN COURS, non finalisée
```

---

## Corrections appliquées lors de l'audit (2026-06-02)

Corrections systématiques appliquées sur toutes les apps auditées :

| Correction | Apps concernées |
|------------|----------------|
| `role="group"` + `aria-label` sur la barre de niveaux/sons/textes | toutes sauf saut-de-nombre (déjà conforme) |
| `aria-pressed` dans le HTML + mis à jour dynamiquement en JS | toutes sauf saut-de-nombre |
| Suppression des emojis ✅/❌ dans les messages de feedback | toutes |
| Feedback mauvaise réponse formatif (nomme la bonne réponse + explication) | capacites, surfaces, comparaison-nombres, valeur-position |
| `verify-btn` masqué après validation, restauré sur newExercise | capacites, surfaces, droite-graduee |
| `new-btn` couleur corrigée : branche → vert neutre `#0F7860` | vocabulaire |
| Mismatch CSS `.back-btn` → `.back-link` | vertical-calculation |

## Apps non finalisées

| App | État |
|-----|------|
| balance.html | EN COURS — logique en place, finition visuelle à compléter |
| longueurs.html | EN COURS — canvas fonctionnel, audit PER non fait |

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
