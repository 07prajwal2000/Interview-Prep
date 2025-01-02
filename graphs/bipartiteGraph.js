/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length;
  const visited = Array(n).fill(0); // 0 -> unvisited, 1 or 2 is visited
  const q = [[0, 1]];
  while (q.length) {
    const [node, color] = q.shift();
    if (visited[node] == 0) {
      visited[node] = color;
    }

    for (let nei of graph[node]) {
      if (visited[nei] == color) return false;
      if (visited[nei] != 0) continue;
      q.push([nei, color == 2 ? 1 : 2]);
    }
  }
  return true;
};
console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]]));