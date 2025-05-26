/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length, n = s2.length, o = s3.length;
  const dp = Array(m + 1);
  if (m + n != o) return false;
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1);
  }
  function check(i, j, k) {
    if (k == o) return true;
    if (dp[i][j] != undefined) return dp[i][j];
    const left = i < m && s1[i] == s3[k] && check(i + 1, j, k + 1);
    const right = j < n && s2[j] == s3[k] && check(i, j + 1, k + 1);
    const isValid = left || right;
    dp[i][j] = isValid
    return isValid;
  }
  return check(0, 0, 0);
};