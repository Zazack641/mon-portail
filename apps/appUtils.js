/* appUtils.js — Utilitaires JS partagés entre toutes les apps pédagogiques.
   NE PAS IMPORTER dans les apps existantes — uniquement pour les nouvelles apps
   créées à partir de _template.html.                                          */

/**
 * Entier aléatoire dans [a, b] inclus.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function randInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}

/**
 * Entier aléatoire dans [a, b[ excluant les valeurs de `exclude`.
 * @param {number} a
 * @param {number} b
 * @param {number[]} [exclude=[]]
 * @returns {number}
 */
function randBetween(a, b, exclude = []) {
  let v;
  do { v = randInt(a, b - 1); } while (exclude.includes(v));
  return v;
}

/**
 * Mélange un tableau (copie, ne mute pas l'original).
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Tire n éléments aléatoires distincts dans arr.
 * @template T
 * @param {T[]} arr
 * @param {number} n
 * @returns {T[]}
 */
function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}

/**
 * Retourne la variable CSS de couleur pour un rang de position (0=unités, 1=dizaines, 2=centaines…).
 * @param {number} rank
 * @returns {string}
 */
function colorForRank(rank) {
  const vars = ['--color-units', '--color-tens', '--color-hundreds'];
  return `var(${vars[rank % 3]})`;
}

/* ----------------------------------------------------------------------------
   Boucle de tabulation globale (focus trap)
   ----------------------------------------------------------------------------
   Correctif d'accessibilité fourni à TOUTES les apps qui chargent ce fichier.
   À chaque pression de Tab / Shift+Tab, on recalcule dynamiquement la liste des
   éléments focusables réellement visibles (recalcul à chaque frappe => reflète
   le DOM courant après un changement de niveau ou un « Nouvel exercice »).
   - Tab sur le dernier élément        -> retour au premier.
   - Shift+Tab sur le premier élément  -> retour au dernier.
   Ne pas réimplémenter ce comportement app par app.                          */
(function () {
  const FOCUSABLE_SELECTOR =
    'a[href], button:not(:disabled), input:not(:disabled), ' +
    'select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

  function getFocusableElements() {
    return Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR))
      // offsetParent === null => élément masqué (display:none, parent caché…).
      .filter((el) => el.offsetParent !== null);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;

    const focusable = getFocusableElements();
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (e.shiftKey) {
      if (active === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
