/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const n = s.length, m = t.length;

  let i = 0, j = 0;
  while (i < n && j < m) {
    if (s[i] == t[j]) i++;
    j++;
  }
  return i == n;
};