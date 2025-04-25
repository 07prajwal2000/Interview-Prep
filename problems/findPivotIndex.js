/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((val, sum) => (sum += val));
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let remaining = totalSum - curSum - nums[i];
    if (remaining == curSum) return i;
    curSum += nums[i];
  }
  return -1;
};