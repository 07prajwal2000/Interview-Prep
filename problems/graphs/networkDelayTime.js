const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let dist = Array(n + 1).fill(Infinity);
  let adj = {};
  for (let t of times) {
    let [src, dst, w] = t;
    if (src in adj) adj[src].push([dst, w]);
    else adj[src] = [[dst, w]];
  }
  dist[k] = 0;
  let pq = new MinPriorityQueue();
  pq.enqueue({node: k, weight: 0}, 0);

  while (pq.size()) {
    const { node, weight } = pq.dequeue();

    if (!(node in adj)) continue;
    
    for (let [nei, dst] of adj[node]) {
      const calcW = dst + weight;
      if (dist[nei] > calcW) {
        dist[nei] = calcW;
        pq.enqueue({node: nei, weight: calcW}, calcW);
      }
    }
  }
  let delay = 0;
  for (let i = 1; i <= n; i++) {
    const cur = dist[i];
    if (cur == Infinity) return -1;
    delay = Math.max(cur, delay);
  } 
  return delay;
};

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));
console.log(networkDelayTime([[1,2,1]], 2, 1));