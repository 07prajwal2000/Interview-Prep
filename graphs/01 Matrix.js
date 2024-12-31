/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length, n = mat[0].length;
  const ans = [];
  const q = [];
  for (let i = 0; i < m; i++) {
    ans.push(Array(n).fill(Infinity)); // using existing for loop to fill
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        q.push([i, j]);
        ans[i][j] = 0;
      }
    }
  }

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  while (q.length) {
    const cur = q.shift();
    for (let dir of dirs) {
      const x = cur[0] + dir[0];
      const y = cur[1] + dir[1];
      if (x < 0 || x == m || y < 0 || y == n) continue;
      const cx = cur[0];
      const cy = cur[1];
      if (ans[x][y] > ans[cx][cy] + 1) {
        ans[x][y] = ans[cx][cy] + 1;
        q.push([x, y]);
      }
    }
  }

  return ans;
};

console.log(updateMatrix([[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,0]]));