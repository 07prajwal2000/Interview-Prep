/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[n - 1] = 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < n && dp[i] == 0) dp[i] = dp[i + j];
    }
  }
  return dp[0] == 1;
  function jump(i) {
    if (i == n - 1) return true;
    if (i >= n) return false;
    if (dp[i] != -1) return dp[i] == 1;
    for (let j = 1; j <= nums[i]; j++) {
      let ans = jump(i + j);
      if (ans) {
        dp[i] = 1;
        return true;
      }
    }
    dp[i] = 0;
    return false;
  }
  return jump(0);
};

console.log(canJump([2, 5, 0, 0]));