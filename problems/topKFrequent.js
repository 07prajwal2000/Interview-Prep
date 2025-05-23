/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const heap = new MaxPriorityQueue(x => x[0]), map = {};
  for (let num of nums) {
    map[num] = num in map ? map[num] + 1 : 1;
  }
  for (let k in map) {
    heap.push([map[k], parseInt(k)]);
  }
  const ans = [];
  while (k) {
    ans.push(heap.pop()[1]);
    k--;
  }
  return ans;
}

var topKFrequent2 = function (nums, k) {
  const map = {};
  let maxCount = 0;
  for (let num of nums) {
    map[num] = num in map ? map[num] + 1 : 1;
    maxCount = Math.max(map[num], maxCount);
  }
  const counterTracker = Array(maxCount + 1);
  for (let key in map) {
    const count = map[key];
    if (counterTracker[count]) {
      counterTracker[count].push(key);
    } else {
      counterTracker[count] = [key];
    }
  }
  const result = [];
  for (let i = maxCount; i > 0 && k > 0; i--) {
    if (!counterTracker[i]) continue;
    while (counterTracker[i].length > 0 && k > 0) {
      result.push(parseInt(counterTracker[i].pop()));
      k--;
    }
  }
  return result;
};