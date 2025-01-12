const { PriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  let m = heights.length, n = heights[0].length;
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const pq = new PriorityQueue((a, b) => a[2] - b[2]);
  
  pq.enqueue([0, 0, 0]);
  
  const dist = Array(m);
  
  for (let i = 0; i < m; i++) dist[i] = Array(n).fill(1e9);
  
  while (pq.size()) {
    let [x, y, e] = pq.dequeue();

    if (x == m - 1 && y == n - 1) return e;
    
    for (let dir of dirs) {
      let tx = dir[0] + x;
      let ty = dir[1] + y;

      if (tx < 0 || ty < 0 || tx == m || ty == n) continue;

      const curE = Math.max(e, Math.abs(heights[x][y] - heights[tx][ty]));
      
      if (dist[tx][ty] > curE) {
        pq.enqueue([tx, ty, curE]);
        dist[tx][ty] = curE;
      }
    }
  }
  return 0;
};

console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));