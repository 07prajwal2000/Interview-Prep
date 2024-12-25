var orangesRotting = function (grid) {
  const n = grid.length, m = grid[0].length;
  let fresh = 0, q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) fresh++;
      else if (grid[i][j] == 2) q.push([i, j]);
    }
  }
  if (fresh == 0) return 0;
  let mins = -1;
  while (q.length) {
    const tlength = q.length;
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let i = 0; i < tlength; i++) {
      const coords = q.shift();
      for (let dir of directions) {
        let x = coords[0] + dir[0];
        let y = coords[1] + dir[1];
        if (x == n || x < 0 || y == m || y < 0 || grid[x][y] != 1) continue;
        grid[x][y] = 2;
        fresh--;
        q.push([x, y]);
      }
    }
    mins++;
  }
  return fresh == 0 ? mins : -1;
};