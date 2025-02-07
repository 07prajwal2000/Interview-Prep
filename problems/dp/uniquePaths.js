/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  function calc(i, j) {
    if (i == 1 && j == 1) return 1;
    if (i == 0 || j == 0) return 0;
    if (dp[i][j] != 0) return dp[i][j];
    dp[i][j] = calc(i - 1, j) + calc(i, j - 1);
    return dp[i][j];
  }

  let ans = calc(m, n);
  return ans;
};

console.log(uniquePaths(3, 7));