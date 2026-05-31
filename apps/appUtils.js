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
