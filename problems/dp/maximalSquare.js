/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  const dp = Array.from({ length: m + 1 }).map(x => Array(n + 1).fill(0));
  let maxCount = 0;
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (matrix[i - 1][j - 1] != '1') continue;
      dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      maxCount = Math.max(dp[i][j], maxCount);
    }
  }
  return maxCount * maxCount;
};