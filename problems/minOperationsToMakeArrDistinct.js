/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let occurances = Array(101).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    let cur = nums[i];
    if (occurances[cur] > 0) return Math.ceil((i + 1) / 3);
    occurances[cur]++;
  }
  return 0;
};