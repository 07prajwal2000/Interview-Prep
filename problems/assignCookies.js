/**
* @param {number[]} g
* @param {number[]} s
* @return {number}
*/
var findContentChildren = function (g, s) {
  let count = 0;
  g.sort((a, b) => (a - b));
  s.sort((a, b) => (a - b));
  let m = g.length, n = s.length, i = 0, j = 0;
  while (i < m && j < n) {
    if (s[j] >= g[i]) {
      i++;
      count++;
    }
    j++;
  }
  return count;
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));