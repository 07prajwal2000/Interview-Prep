// https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1
const { Heap } = require("heap-js");

class Solution {
  spanningTree(v, adj) {
    const heap = new Heap((a, b) => a[0] - b[0]); // weight, node
    const visited = Array(v).fill(0);
    heap.push([0, 0]);
    let pathSum = 0;

    while (heap.length) {
      const [weight, node] = heap.pop();
      if (visited[node]) continue;
      pathSum += weight;
      visited[node] = 1;

      for (let nei of adj[node]) { // to, weight
        const [to, w] = nei;
        if (visited[nei]) continue;
        heap.push([w, to]);
      }
    }
    return pathSum;
  }
}

console.log(new Solution().spanningTree(3, [[[1, 5], [2, 1]], [[0, 5], [2, 3]], [[0, 1], [1, 3]]])); // minimum path sum: 4