function topologicalSort(adj) {
  const stack = [], visited = Array(adj.length).fill(0);
  function dfs(i) {
    if (visited[i] == 1) return;
    visited[i] = 1;
    for (let node of adj[i]) {
      if (visited[node]) continue;
      dfs(node);
    }
    stack.push(i);
  }
  for (let i = 0; i < adj.length; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  return stack.reverse();
}

console.log(topologicalSort([[], [3], [3], [], [0,1], [0,2]]));