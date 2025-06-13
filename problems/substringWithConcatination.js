/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map = new Map(), n = s.length, m = words[0].length;
  for (let word of words) {
    map.set(word, (map.get(word) ?? 0) + 1)
  }

  const ans = [];
  for (let i = 0; i < n && n - i >= words.length; i++) {
    const map1 = new Map();
    for (let j = i; j < n && j + m <= n; j += m) {
      const word = s.substring(j, j + m);
      if (map.has(word)) {
        map1.set(word, (map1.get(word) ?? 0) + 1);
        if (map1.get(word) > (map.get(word) || 0)) {
          break;
        }
        if (j + m - i == m * words.length && compare(map1, map)) {
          ans.push(i);
          break;
        }
      } else break;
    }
  }
  return ans;
};

function compare(m1, m2) {
  for (let [k, v] of m1) {
    if (!m2.has(k) || m2.get(k) != v) return false;
  }
  for (let [k, v] of m2) {
    if (!m1.has(k) || m1.get(k) != v) return false;
  }
  return true;
}