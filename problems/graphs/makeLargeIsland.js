/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  let id = 2;
  const islandArea = {}, n = grid.length;
  let area = 0;
  function oob(i, j) {
    return i < 0 || j < 0 || i >= n || j >= n;
  }
  function mark(i, j) {
    if (oob(i, j) || grid[i][j] == id || grid[i][j] == 0) return;
    if (grid[i][j] == 1) {
      grid[i][j] = id;
      area++;
      mark(i + 1, j);
      mark(i - 1, j);
      mark(i, j + 1);
      mark(i, j - 1);
    }
  }
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0 || grid[i][j] == id) {
        zeros++;
        continue;
      }
      area = 0;
      mark(i, j);
      islandArea[id] = area;
      id++;
    }
  }
  if (zeros == 0) return n * n;
  const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] != 0) continue;
      let set = new Set();
      let tmp = 0;
      for (let [x, y] of dirs) {
        let xx = i + x;
        let yy = j + y;
        if (oob(xx, yy) || grid[xx][yy] == 0 || set.has(grid[xx][yy])) continue;
        const iId = grid[xx][yy];
        let locArea = islandArea[iId];
        tmp += locArea;
        set.add(iId);
      }
      maxArea = Math.max(maxArea, tmp + 1);
    }
  }
  return maxArea;
};

const grid = [
  [1, 1],
  [1, 1]
];

console.log(largestIsland(grid));