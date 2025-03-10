/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (mat) {
  const n = mat.length;
  const dp = mat; //Array(n); // space optimization
  // tabulation
  // for (let i = 0; i < n; i++) {
  //   dp[i] = Array(n).fill(1e9);
  // }

  // for (let i = 0; i < n; i++) {
  //   dp[0][i] = mat[0][i];
  // }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cur = mat[i][j] + dp[i - 1][j];
      let left = mat[i][j] + (dp[i - 1][j - 1] ?? 1e9);
      let right = mat[i][j] + (dp[i - 1][j + 1] ?? 1e9);
      dp[i][j] = Math.min(cur, left, right);
    }
  }

  let min = 1e9;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[n - 1][i]);
  }
  return min;

  // memoization
  function find(level, cameFrom) {
    if (cameFrom < 0 || cameFrom >= n) return 1e9;
    if (level == 0) {
      return mat[level][cameFrom] ?? 1e9;
    }
    if (dp[level][cameFrom] != 1e9) return dp[level][cameFrom];
    let cur = find(level - 1, cameFrom) + mat[level][cameFrom];
    let left = find(level - 1, cameFrom - 1) + mat[level][cameFrom];
    let right = find(level - 1, cameFrom + 1) + mat[level][cameFrom];
    return dp[level][cameFrom] = Math.min(cur, left, right);
  }
  for (let i = 0; i < n; i++) {
    min = Math.min(min, find(n - 1, i));
  }
  return min;
};

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));