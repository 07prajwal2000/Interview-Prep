/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length, n = grid[0].length;
  const minPath = Array(m).fill(0).map(() => new Array(n).fill(-1));
  if (n == 1 && m == 1) return grid[0][0];
  function dp(i, j) {
    if (i == 0 && j == 0) return grid[0][0];
    if (i < 0 || j < 0) return Infinity;
    if (minPath[i][j] != -1) return minPath[i][j];

    let top = grid[i][j] + dp(i - 1, j);
    let left = grid[i][j] + dp(i, j - 1);

    minPath[i][j] = Math.min(top, left);
    return minPath[i][j];
  }
  return dp(m - 1, n - 1);
};

const input = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(input));