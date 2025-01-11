/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const revG = Array(n);
  const indegree = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let nei of graph[i]) {
      if (revG[nei] == undefined) revG[nei] = [];
      revG[nei].push(i);
      indegree[i]++;
    }
  }
  const q = [];
  for (let i = 0; i < n; i++) {
    const deg = indegree[i];
    if (deg == 0) q.push(i);
  }
  const ans = [];
  while (q.length) {
    const node = q.shift();
    ans.push(node);
    if (!revG[node]) continue;
    for (let nei of revG[node]) {
      indegree[nei]--;
      if (indegree[nei] == 0) {
        q.push(nei);
      }
    }
  }
  return ans.sort((a, b) => a - b);
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));