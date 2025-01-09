/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // bellman ford
  let dist = Array(n).fill(1e9);
  dist[src] = 0;
  for (let i = 0; i <= k; i++) {
    const tmp = [...dist];
    for (let f of flights) {
      let [s, d, w] = f;
      if (dist[s] == 1e9) continue;
      tmp[d] = Math.min(tmp[d], dist[s] + w);
    }
    dist = tmp;
  }
  return dist[dst] == 1e9 ? -1 : dist[dst];
};

function dijkstra(n, flights, src, dst, k) {
  let graph = {};
  for (let f of flights) {
    if (!(f[0] in graph)) graph[f[0]] = [];
    graph[f[0]].push([f[1], f[2]]);
  }
  let pq = new MinPriorityQueue({ // weight, src, stops
    compare: (a, b) => a[0] - b[0]
  });
  pq.enqueue([0, src, k + 1]);

  while (pq.size()) {
    const [cost, node, stops] = pq.dequeue();

    if (node == dst) return cost;
    if (!(node in graph)) continue;
    if (stops > 0) {
      for (let n of graph[node]) {
        const [nei, weight] = n;
        let calcWeight = cost + weight;
        pq.enqueue([calcWeight, nei, stops - 1]);
      }
    }
  }
  return -1;
}

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));