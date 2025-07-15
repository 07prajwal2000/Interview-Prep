/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;
  let total = 0, maxSum = nums[0], minSum = nums[0], curMax = 0, curMin = 0;
  for (let i = 0; i < n; i++) {
    const cur = nums[i];
    curMax = Math.max(cur, curMax + cur);
    maxSum = Math.max(curMax, maxSum);
    curMin = Math.min(cur, curMin + cur);
    minSum = Math.min(curMin, minSum);
    total += cur;
  }
  return maxSum > 0 ? Math.max(total - minSum, maxSum) : maxSum;
};