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
 * Entier aléatoire ayant exactement `digits` chiffres (0–9 pour 1 chiffre).
 * @param {number} digits
 * @returns {number}
 */
function randIntWithDigits(digits) {
  return randInt(digits === 1 ? 0 : Math.pow(10, digits - 1), Math.pow(10, digits) - 1);
}

/**
 * Deux entiers distincts jusqu'à `maxDigits` chiffres, pour les exercices de comparaison.
 * Environ 3/4 des paires ont le même nombre de chiffres ; le reste mélange un nombre à
 * `maxDigits` chiffres et un nombre plus court (le plus souvent d'un chiffre de moins),
 * sans jamais dépasser le maximum (10^maxDigits − 1). Le côté gauche/droit est aléatoire.
 * @param {number} maxDigits
 * @param {number} [shareSame=0.75] part des paires de même longueur
 * @returns {[number, number]}
 */
function randPairMixedDigits(maxDigits, shareSame = 0.75) {
  let a, b;
  if (maxDigits < 2 || Math.random() < shareSame) {
    do { a = randIntWithDigits(maxDigits); b = randIntWithDigits(maxDigits); } while (a === b);
    return [a, b];
  }
  const shorter = (maxDigits < 3 || Math.random() < 0.7)
    ? maxDigits - 1
    : randInt(1, maxDigits - 2);
  a = randIntWithDigits(maxDigits);
  b = randIntWithDigits(shorter);
  return Math.random() < 0.5 ? [a, b] : [b, a];
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
      .filter((el) => el.offsetParent !== null)
      // el.tabIndex < 0 => hors de l'ordre de tabulation. Indispensable : le
      // sélecteur ci-dessus capture tout <button>/<a> même porteur de
      // tabindex="-1" (ex. roving tabindex d'une liste de choix), qui ne doit
      // PAS compter comme premier/dernier élément de la boucle.
      .filter((el) => el.tabIndex >= 0);
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
