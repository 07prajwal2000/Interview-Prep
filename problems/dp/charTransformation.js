/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const freq = Array(26).fill(0), mod = 1e9 + 7;
  for (let c of s) freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  for (let i = 1; i <= t; i++) {
    let zs = freq[25];
    for (let j = 24; j >= 0; j--) {
      if (freq[j] == 0) continue;
      let cs = freq[j];
      freq[j] = 0;
      freq[j + 1] += cs % mod;
    }
    if (zs > 0) {
      freq[25] -= zs;
      freq[0] += zs % mod;
      freq[1] += zs % mod;
    }
  }
  let len = 0;
  for (let i = 0; i < 26; i++) {
    len += freq[i];
    len = len % mod;
  }
  return len;
};