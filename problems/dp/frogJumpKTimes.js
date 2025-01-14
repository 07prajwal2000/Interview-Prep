function minimizeCost(k, heights) {
  const n = heights.length;
  let dp = Array(n).fill(0);
  function jump(i) {
    if (i == 0) return 0;
    if (dp[i]) return dp[i];
    let min = 1e9;
    for (let j = 1; j <= k; j++) {
      if (j < 0) break;
      if (i - j < 0) break;
      let tmp = jump(i - j) + Math.abs(heights[i] - heights[i - j]);
      min = Math.min(tmp, min);
    }
    dp[i] = min;
    return dp[i];
  }
  return jump(n - 1);
}

console.log(minimizeCost(3, [10, 30, 40, 50, 20]));