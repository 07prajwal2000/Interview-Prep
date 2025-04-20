/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length, m = t.length;
  const tMap = {}, sMap = {};
  let ans = [0, 0, 1e9], count = 0, l = 0, r = 0;

  for (let c of t) tMap[c] = c in tMap ? tMap[c] + 1 : 1;

  while (r < n) {
    const char = s[r];
    if (char in sMap) sMap[char]++;
    else sMap[char] = 1;
    if (char in tMap && sMap[char] == tMap[char]) count += tMap[char];
    while (count == m) {
      if (ans[2] > r - l + 1) ans = [l, r, r - l + 1];
      const leftChar = s[l];
      sMap[leftChar]--;
      if (leftChar in tMap && sMap[leftChar] < tMap[leftChar]) {
        count -= tMap[leftChar];
      }
      l++;
    }
    r++;
  }
  return ans[2] == 1e9 ? "" : s.substring(ans[0], ans[1] + 1);
};

console.log(minWindow("aBAbaAabBbA", "bbA"));