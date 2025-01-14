/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const ans = [];
  const tracker = Array(nums.length);

  for (let num of nums) {
    const val = num in map ? map[num] + 1 : 1;
    map[num] = val;
  }

  for (let key in map) {
    const count = map[key];

    if (tracker[count]) tracker[count].push(key);
    else tracker[count] = [key];
  }

  for (let i = tracker.length - 1; i >= 0 && k > 0; i--) {
    if (!tracker[i]) continue;

    while (k && tracker[i].length) {
      ans.push(parseInt(tracker[i].pop()));
      k--;
    }
  }

  return ans;
};

console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));