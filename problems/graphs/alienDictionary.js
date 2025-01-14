// https://www.geeksforgeeks.org/problems/alien-dictionary/1
function findOrder(dict, k) {
  const graph = Array(k);
  for (let i = 0; i < k; i++) graph[i] = [];
  function toNum(char) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }
  function fromNum(num) {
    return String.fromCharCode(num + "a".charCodeAt(0));
  }

  for (let i = 0; i < dict.length - 1; i++) {
    let s1 = dict[i], s2 = dict[i + 1];
    for (let j = 0; j < Math.min(s1.length, s2.length); j++) {
      if (s1[j] == s2[j]) continue;

      let c1 = toNum(s1[j]);
      let c2 = toNum(s2[j]);

      graph[c1].push(c2);
      break;
    }
  }
  function topologicalSort(adj) {
    const stack = [], visited = Array(adj.length).fill(0);
    function dfs(i) {
      if (visited[i] == 1) return;
      visited[i] = 1;
      if (!adj[i]) return;
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
  const topo = topologicalSort(graph);
  let ans = "";
  for (let t of topo) {
    ans += fromNum(t);
  }
  return ans;
}

console.log(findOrder(["baa", "abcd", "abca", "cab", "cad"], 4));