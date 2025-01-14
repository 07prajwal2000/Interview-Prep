/**
 * @param {number[][]} adj
 * @return {number}
 */
var findCircleNum = function (adj) {
  const n = adj.length;
  const visited = Array(n).fill(0);
  function dfs(i) {
    for (let j = 0; j < n; j++) {
      if (adj[i][j] == 1 && visited[j] == 0) {
        visited[j] = 1;
        dfs(j);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] == 1) continue;
    dfs(i);
    count++;
  }
  return count;
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));