/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (rn, magazine) {
  const counter = Array(26).fill(0);
  for (let i = 0; i < rn.length; i++) {
    counter[rn[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (let c of magazine) {
    counter[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
    if (counter[i] > 0) return false;
  }
  return true;
};