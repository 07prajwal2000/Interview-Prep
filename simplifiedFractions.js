/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const set = new Set();
  let ans = [];
  for (let den = 2; den <= n; den++) {
    for (let num = 1; num < den; num++) {
      let q = num / den;
      if (set.has(q)) continue;
      ans.push(`${num}/${den}`);
      set.add(q);
    }
  }
  return ans;
};

console.log(simplifiedFractions(4));