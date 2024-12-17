/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length, n = grid[0].length;
  let maxArea = 0, tmpArea = 0;
  function traverse(i, j) {
    if (i < 0 || i == m || j < 0 || j == n || grid[i][j] != 1) return;
    tmpArea++;
    grid[i][j] = -1;
    traverse(i + 1, j);
    traverse(i - 1, j);
    traverse(i, j + 1);
    traverse(i, j - 1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] != 1) continue;
      tmpArea = 0;
      traverse(i, j);
      maxArea = Math.max(maxArea, tmpArea);
    }
  }
  return maxArea;
};