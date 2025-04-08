/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (nums.length == 1) return nums[0];
  nums = [1, ...nums, 1];
  const n = nums.length;
  const dp = Array(n).fill(0).map(x => Array(n).fill(-1));

  function find(start, end) {
    if (start > end) return 0;
    if (start == end) {
      let curCoins = nums[start];
      if (start - 1 >= 0) curCoins *= nums[start - 1];
      if (end + 1 < n) curCoins *= nums[end + 1];
      return curCoins;
    }
    if (dp[start][end] != -1) return dp[start][end];
    let maxCoins = 0;
    for (let i = start; i <= end; i++) {
      let curCoins = nums[i];

      if (start - 1 >= 0) curCoins *= nums[start - 1];
      if (end + 1 < n) curCoins *= nums[end + 1];

      curCoins += find(start, i - 1);
      curCoins += find(i + 1, end);

      maxCoins = Math.max(maxCoins, curCoins);
    }
    return dp[start][end] = maxCoins;
  }

  return find(1, n - 2);
};