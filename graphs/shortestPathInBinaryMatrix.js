/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) return -1;
  const q = [[0, 0]]; // [x, y]
  const dist = Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = Array(n).fill(0);
  }
  dist[0][0] = 1;
  const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  let ans = 0;
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (node[0] == n - 1 && node[1] == n - 1) return ans + 1;
      for (let dir of dirs) {
        let x = node[0] + dir[0];
        let y = node[1] + dir[1];
        if (x < 0 || y < 0 || x == n || y == n || grid[x][y] == 1 || dist[x][y]) {
          continue;
        }
        dist[x][y] = 1;
        q.push([x, y]);
      }
    }
    ans++;
  }
  return -1;
};

console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]]));