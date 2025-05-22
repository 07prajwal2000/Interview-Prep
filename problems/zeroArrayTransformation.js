/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  const n = nums.length;
  const prefix = Array(n + 1).fill(0);
  for (let [x, y] of queries) {
    prefix[x]++;
    prefix[y + 1]--;
  }
  for (let i = 1; i < n; i++) {
    prefix[i] += prefix[i - 1];
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > prefix[i]) return false;
  }
  return true;
};

console.log(isZeroArray([1, 0, 1], [[0, 2]]));