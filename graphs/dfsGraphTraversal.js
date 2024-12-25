function dfsOfGraph(adj) {
  const n = adj.length;
  const visited = Array(n).fill(0), ans = [];
  function visit(i) {
    visited[i] = 1;
    ans.push(i);
    const vertices = adj[i];
    for (let v of vertices) {
      if (visited[v]) continue;
      visit(v);
    }
  }
  visit(0);
  return ans;
}