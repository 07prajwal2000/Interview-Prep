/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const n = nums.length;
  const dp = {};
  function find(i, sum) {
    const key = `${i} ${sum}`;
    if (sum == target && i == n) {
      return 1;
    }
    if (i == n) return 0;
    if (key in dp) {
      return dp[key];
    }
    const add = find(i + 1, sum + nums[i]);
    const sub = find(i + 1, sum - nums[i]);
    const res = add + sub;
    dp[key] = res;
    return res;
  }
  return find(0, 0);
};

console.log(findTargetSumWays([1,1,1,1,1], 3));