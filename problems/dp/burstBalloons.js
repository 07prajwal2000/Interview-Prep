/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (nums.length == 1) return nums[0];
  nums.unshift(1);
  nums.push(1);
  const n = nums.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(0);
  }
  for (let start = n - 2; start >= 1; start--) {
    for (let end = start; end < n - 1; end++) {
      let maxCoins = 0;
      for (let i = start; i <= end; i++) {
        let curCoins = nums[start - 1] * nums[i] * nums[end + 1];

        curCoins += dp[start][i - 1];
        curCoins += dp[i + 1][end];

        maxCoins = Math.max(maxCoins, curCoins);
      }
      dp[start][end] = maxCoins;
    }
  }
  return dp[1][n - 2];
  function find(start, end) {
    if (start > end) return 0;
    if (dp[start][end] != -1) return dp[start][end];
    let maxCoins = 0;
    for (let i = start; i <= end; i++) {
      let curCoins = nums[start - 1] * nums[i] * nums[end + 1];
      curCoins += find(start, i - 1);
      curCoins += find(i + 1, end);

      maxCoins = Math.max(maxCoins, curCoins);
    }
    return dp[start][end] = maxCoins;
  }

  return find(1, n - 2);
};

console.log(maxCoins([3, 1, 5, 8]));