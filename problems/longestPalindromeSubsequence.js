/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(-1);
  }

  // memo
  function find(l, r) {
    if (l > r) return 0;
    if (dp[l][r] != -1) return dp[l][r];
    if (s[l] == s[r]) {
      let count = l == r ? 1 : 2;
      return dp[l][r] = find(l + 1, r - 1, count) + count;
    }
    const a = find(l, r - 1);
    const b = find(l + 1, r);
    return dp[l][r] = Math.max(a, b);
  }
  return find(0, n - 1);
};

console.log(longestPalindromeSubseq("abbcb"));
