/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (s1, s2) {
  let n = s1.length; m = s2.length;
  const dp = Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(m + 1).fill(-1);
  }

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= m; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + (dp[i - 1][j - 1] == -1 ? 0 : dp[i - 1][j - 1]);
      } else {
        let left = dp[i][j - 1];
        let right = dp[i - 1][j];

        dp[i][j] = Math.max(left, right);
      }
    }
  }

  return dp[n][m];
};

var memo = function (s1, s2) {
  const dp = Array(s1.length);
  for (let i = 0; i < s1.length; i++) {
    dp[i] = Array(s2.length).fill(-1);
  }
  function find(i, j) {
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    if (s1[i] == s2[j]) return dp[i][j] = 1 + find(i - 1, j - 1);
    let left = find(i - 1, j);
    let right = find(i, j - 1);
    return dp[i][j] = Math.max(left, right);
  }
  return find(s1.length - 1, s2.length - 1);
};
console.log(longestCommonSubsequence("abcde", "ace"));