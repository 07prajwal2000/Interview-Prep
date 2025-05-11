/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = {};
  for (let task of tasks) {
    map[task] = task in map ? map[task] + 1 : 1;
  }
  const maxHeap = MaxPriorityQueue.fromArray(Object.values(map));
  const queue = [];
  let time = 0;
  while (queue.length || maxHeap.size()) {
    time++;
    if (maxHeap.size()) {
      const task = maxHeap.pop() - 1;
      if (task > 0) queue.push([task, time + n]);
    }
    if (queue.length && queue[0][1] == time) {
      const [task, time] = queue.shift();
      maxHeap.enqueue(task);
    }
  }
  return time;
};