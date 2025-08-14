/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let curSum = 0, maxAvg = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const cur = nums[i];
    if (i < k) {
      curSum += cur;
      maxAvg = curSum;
    } else {
      curSum += nums[i] - nums[i - k];
      maxAvg = Math.max(maxAvg, curSum);
    }
  }
  console.log(maxAvg);
  if (maxAvg == 0) return curSum / k;
  return maxAvg / k;
};