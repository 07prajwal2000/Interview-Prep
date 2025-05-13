/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const maxHeap = new MinPriorityQueue(a => a[0]);
  const result = [];
  for (let point of points) {
    const sqrt = Math.sqrt((point[0] * point[0]) + (point[1] * point[1]));
    maxHeap.enqueue([sqrt, point]);
  }
  while (k--) {
    result.push(maxHeap.dequeue()[1]);
  }
  return result;
};