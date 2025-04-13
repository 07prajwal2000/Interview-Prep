/**
 * Optimised by using the input matrix
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const n = matrix.length, m = matrix[0].length;
  const dp = matrix;

  // for (let i = 0; i < Math.max(n, m); i++) {
  //     if (i < m) dp[0][i] = matrix[0][i];
  //     if (i < n) dp[i][0] = matrix[i][0];
  // }
  let count = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] == 0) continue;
          let top = i - 1 >= 0 ? dp[i - 1][j] : 0;
          let left = j - 1 >= 0 ? dp[i][j - 1] : 0;
          let topLeft = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0;
          const min = Math.min(top, left, topLeft);
          dp[i][j] = min + 1;
          count += dp[i][j];
      }
  }
  // for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < m; j++) {
  //         if (matrix[i][j] == 0) continue;
  //         count += dp[i][j];
  //     }
  // }
  return count;
};

console.log(
	countSquares([
		[0, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[1, 1, 0],
	])
);
