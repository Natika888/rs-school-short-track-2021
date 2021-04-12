/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const s = String(n).split('');
  for (let i = 0; i < s.length; i++) {
    s[i] = Number(s[i]);
  }
  const m = Math.min(...s);
  const i = s.indexOf(m);
  s.splice(i, 1);
  const x = s.join('');
  return Number(x);
}

module.exports = deleteDigit;
