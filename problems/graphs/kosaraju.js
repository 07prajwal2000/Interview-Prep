function kosaraju(adj) {
  const n = adj.length;
  const visited = Array(n).fill(0);
  const s = []; // stack

  function dfs(node, graph, vis, canPush = true) {
    vis[node] = 1;
    for (let nei of graph[node]) {
      if (vis[nei]) continue;
      dfs(nei, graph, vis);
    }
    if (canPush) s.push(node);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i, adj, visited);
  }
  let reversedG = Array(n);
  for (let i = 0; i < n; i++) {
    reversedG[i] = [];
  }
  // reverse the graph
  for (let i = 0; i < n; i++) {
    visited[i] = 0;
    for (let nei of adj[i]) {
      reversedG[nei].push(i);
    }
  }
  let scc = 0;
  while (s.length) {
    let node = s.pop();
    if (visited[node]) continue;
    scc++;
    dfs(node, reversedG, visited, false);
  }
  return scc;
}

console.log(kosaraju([[2, 3], [0], [1], [4], []]));