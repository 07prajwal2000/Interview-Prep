/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  cuts.sort((x, y) => (x - y));
  const dp = Array(cuts.length).fill(0).map(x => Array(cuts.length).fill(-1));
  function find(start, end, stickStart, stickEnd) {
    if (start > end) return 0;
    if (dp[start][end] != -1) return dp[start][end];
    let cost = 1e9;
    for (let i = start; i <= end; i++) {
      let leftCut = find(start, i - 1, stickStart, cuts[i]);
      let rightCut = find(i + 1, end, cuts[i], stickEnd);
      let curCost = (stickEnd - stickStart) + leftCut + rightCut;
      cost = Math.min(cost, curCost);
    }
    return dp[start][end] = cost;
  }
  return find(0, cuts.length - 1, 0, n);
};

console.log(minCost(7, [1, 3, 4, 5]));
