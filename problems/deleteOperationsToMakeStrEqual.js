/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  function lcs(s1, s2) {
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
  }
  const len1 = word1.length;
  const len2 = word2.length;
  let min = lcs(word1, word2);
  let ans = (len1 - min) + (len2 - min);
  return ans;
};

console.log(minDistance("sead", "sdjea"));