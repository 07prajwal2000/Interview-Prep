function bfsOfGraph(adj) {
  const n = adj.length;
  const visited = Array(n).fill(0);
  let ans = [], s = [0];
  visited[0] = 1;
  while (s.length > 0) {
    const node = s.shift();
    const vertices = adj[node];
    ans.push(node);
    for (let v of vertices) {
      if (visited[v]) continue;
      s.push(v);
      visited[v] = 1;
    }
  }
  return ans;
}