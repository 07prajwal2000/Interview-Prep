/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curSum = 0, maxSum = nums[0];
  for (let num of nums) {
    curSum += num;
    if (curSum > maxSum) maxSum = curSum;
    if (curSum < 0) curSum = 0;
  }
  return maxSum;
};