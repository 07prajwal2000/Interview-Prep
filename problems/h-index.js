/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (c) {
  const n = c.length, bucket = Array(n + 1).fill(0);
  for (let cit of c) {
    if (cit >= n) bucket[n]++;
    else bucket[cit]++;
  }
  let total = 0;
  for (let i = n; i >= 0; i--) {
    total += bucket[i];
    if (total >= i) {
      return i;
    }
  }
  return 0;
};