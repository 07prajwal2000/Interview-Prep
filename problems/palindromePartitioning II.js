/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  let n = s.length;
  if (n == 1) return 0;
  const dp = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let minCost = 1e9;
    for (let j = i; j < n; j++) {
      if (!isPalindrome(s, i, j)) continue;
      minCost = Math.min(1 + dp[j + 1], minCost);
    }
    dp[i] = minCost;
  }
  return dp[0] - 1;

  function find(i) {
    if (i == n) return 0;
    if (dp[i] != -1) return dp[i];
    let minCost = 1e9;
    for (let j = i; j < n; j++) {
      if (!isPalindrome(s, i, j)) continue;
      minCost = Math.min(minCost, 1 + find(j + 1));
    }
    return dp[i] = minCost;
  }
  return find(0) - 1;
};

function isPalindrome(s, i, j) {
  while (i <= j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}