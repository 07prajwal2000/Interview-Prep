/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const n = matrix.length, m = matrix[0].length;
  const dp = Array(n).fill(0).map(() => Array(m).fill(0));

  function find(i, j, prev) {
    if (i < 0 || j < 0 || j >= m || i >= n || matrix[i][j] <= prev) return 0;
    if (dp[i][j] != 0) return dp[i][j];
    const cur = matrix[i][j];
    let left = find(i - 1, j, cur);
    let right = find(i + 1, j, cur);
    let top = find(i, j - 1, cur);
    let down = find(i, j + 1, cur);
    return dp[i][j] = 1 + Math.max(left, right, top, down);
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, find(i, j, -1));
    }
  }
  return max;
};

console.log(longestIncreasingPath([
  [1, 1, 1],
  [4, 3, 2],
  [6, 7, 9],
]));