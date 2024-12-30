function isCycle(adj) {
  const n = adj.length;
  const visited = Array(n).fill(0);

  function bfs(src) {
    visited[src] = 1;
    const q = [[src, -1]]; // node, parent
    while (q.length > 0) {
      const [node, parent] = q.shift();
      for (let nei of adj[node]) {
        if (!visited[nei]) {
          visited[nei] = 1;
          q.push([nei, node]);
        } else if (parent != nei) {
          return true;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    if (bfs(i)) return true;
  }

  return false;
}

console.log(isCycle([[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]));