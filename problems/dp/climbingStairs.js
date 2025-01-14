/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = {};
  function climb(num) {
    if (num < 0) return 0;
    if (num == 0) return 1;
    if (num in dp) return dp[num];

    dp[num] = climb(num - 1) + climb(num - 2);
    return dp[num];
  }
  return climb(n);
};