function minCost(heights) {
  const n = heights.length;
  let dp = Array(n).fill(0);
  function jump(i) {
    if (i == 0) return 0;
    if (i < 0) return 1e9;
    if (dp[i]) return dp[i];
    let left = jump(i - 1) + Math.abs(heights[i] - heights[i - 1]);
    let right = jump(i - 2) + Math.abs(heights[i] - heights[i - 2] || 0);
    dp[i] = Math.min(left, right);
    return dp[i];
  }
  return jump(n - 1);
}

console.log(minCost([20, 30, 40, 20]));