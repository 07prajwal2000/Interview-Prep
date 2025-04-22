/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length, n = heights[0].length;
  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  function dfs(row, col, mat) {
    mat[row][col] = true;
    const height = heights[row][col];
    for (let [x, y] of dirs) {
      let i = x + row, j = y + col;
      if (i < 0 || j < 0 || i >= m || j >= n || mat[i][j] || heights[i][j] < height) continue;
      dfs(i, j, mat);
    }
  }
  for (let i = 0; i < n; i++) {
    dfs(0, i, pacific);
    dfs(m - 1, i, atlantic);
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
    dfs(i, n - 1, atlantic);
  }
  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) ans.push([i, j]);
    }
  }
  return ans;
};