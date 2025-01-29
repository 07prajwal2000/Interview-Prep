/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] == '0') return 0;
  const dp = {}, n = s.length;
  let count = 0;
  function countWays(i) {
    if (i in dp && dp[i] > 0) return dp[i];
    if (i == n) {
      dp[i] = 1;
      return 1;
    }
    if (s[i] == '0') {
      dp[i] = 0;
      return 0;
    }
    let res = countWays(i + 1);
    // checking if the num is less than 27
    if (i < n - 1 && (s[i] == '1' || (s[i] == '2' && s[i + 1] < '7'))) {
      res += countWays(i + 2);
    }
    dp[i] = res;
    return res;
  }
  return countWays(0);
};