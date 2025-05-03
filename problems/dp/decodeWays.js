/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] == '0') return 0;
  const n = s.length;
  const dp = Array(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] == '0') dp[i] = 0;
    else {
      let res = dp[i + 1];
      if (i < n - 1 && (s[i] == '1' || (s[i] == '2' && s[i + 1] < '7'))) {
        res += dp[i + 2];
      }
      dp[i] = res;
    }
  }
  return dp[0];
  function countWays(i) {
    if (dp[i] != -1 && dp[i] > 0) return dp[i];
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