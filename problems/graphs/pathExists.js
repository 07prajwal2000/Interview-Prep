// using BFS
var validPath = function (n, edges, src, dst) {
  if (src == dst) return true;
  const adj = {};
  for (let e of edges) {
    let a = e[0], b = e[1];
    if (a in adj) adj[a].push(b);
    else adj[a] = [b];
    if (b in adj) adj[b].push(a);
    else adj[b] = [a];
  }
  const q = [src];
  const visited = Array(n).fill(0);
  visited[src] = true;
  while (q.length) {
    const v = q.shift();
    for (let edg of adj[v]) {
      if (edg == dst) return true;
      if (visited[edg]) continue;
      visited[edg] = 1;
      q.push(edg);
    }
  }
  return false;
};