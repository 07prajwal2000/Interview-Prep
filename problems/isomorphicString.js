/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i], c2 = t[i];
    if (c1 in map1) {
      if (map1[c1] != c2) return false;
    } else {
      map1[c1] = c2;
    }
    if (c2 in map2) {
      if (map2[c2] != c1) return false;
    } else {
      map2[c2] = c1;
    }
  }
  return true;
};