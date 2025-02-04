/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maxSum = nums[0];
  let prev = maxSum;
  let curSum = maxSum;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (prev >= num) curSum = num;
    else curSum += num;

    maxSum = Math.max(maxSum, curSum);
    prev = num;
  }
  return maxSum;
};

console.log(maxAscendingSum([1, 2, 3, 4, 3, 2, 1]));
