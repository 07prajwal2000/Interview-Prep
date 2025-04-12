/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  let dp = Array(n + 1).fill(0); // -1 for memo

  for (let i = n - 1; i >= 0; i--) {
    let max = 0, sum = 0;
    for (let j = i; j < i + k && j < n; j++) {
      max = Math.max(max, arr[j]);
      let curSum = (max * (j - i + 1)) + dp[j + 1];
      sum = Math.max(sum, curSum);
    }
    dp[i] = sum;
  }
  return dp[0];

  function find(i) {
    if (i == n) return 0;
    if (dp[i] != -1) return dp[i];
    let max = 0, sum = 0;
    for (let j = i; j < i + k && j < n; j++) {
      max = Math.max(max, arr[j]);
      let curSum = (max * (j - i + 1)) + find(j + 1);
      sum = Math.max(sum, curSum);
    }
    return dp[i] = sum;
  }
  return find(0);
};