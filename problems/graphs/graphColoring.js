function graphColoring(v, edges, m) {
  const adj = {};
  let nodesCount = 0;
  for (let [x, y] of edges) {
    if (x in adj) {
      adj[x].push(y);
    } else {
      adj[x] = [y];
    }
    if (y in adj) {
      adj[y].push(x);
    } else {
      adj[y] = [x];
      nodesCount++;
    }
  }

  const colored = {};

  function checkNeighbour(node, color) {
    const nei = adj[node];
    if (!nei) return true;
    for (let n of nei) {
      if (n in colored && colored[n] == color) {
        return false;
      }
    }
    return true;
  }

  function colorGraph(node) {
    if (node == v) return true;
    for (let i = 1; i <= m; i++) {
      if (checkNeighbour(node, i)) {
        colored[node] = i;
        if (colorGraph(node + 1)) return true;
        else colored[node] = 0;
      }
    }

    return false;
  }
  return colorGraph(0);
}


console.log(graphColoring(3, [[0, 1], [0, 4], [3, 4]], 2));