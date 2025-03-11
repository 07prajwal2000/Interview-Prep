/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let totalSum = nums.reduce((sum, cur) => (sum += cur));
  if (totalSum & 1 == 1) return false;
  return isSubsetSum(nums, totalSum / 2);
};

function isSubsetSum(arr, target) {
  const n = arr.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(target + 1);
    dp[i][0] = true;
  }
  dp[0][arr[0]] = true;
  for (let i = 1; i < n; i++) {
    for (let t = 1; t <= target; t++) {
      let notTake = dp[i - 1][t];
      let take = false;
      if (t >= arr[i]) take = dp[i - 1][t - arr[i]];
      dp[i][t] = take || notTake;
    }
  }
  return dp[n - 1][target] == true;
}