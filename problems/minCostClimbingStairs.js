/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let cur = 0, prev = cost[1], prev2 = cost[0];
  for (let i = 2; i < n; i++) {
    cur = Math.min(prev, prev2) + cost[i];
    prev2 = prev;
    prev = cur;
  }
  return Math.min(prev, prev2);
  const dp = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i < 2) dp[i] = cost[i];
    else dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[n - 1], dp[n - 2]);
  function find(i) {
    if (i >= n) return 0;
    if (dp[i] != -1) return dp[i];
    return dp[i] = Math.min(find(i + 1), find(i + 2)) + cost[i];
  }
  return Math.min(find(0), find(1));
};