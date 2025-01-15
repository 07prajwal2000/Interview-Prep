/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const memo = Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = nums[0];
  for (let i = 1; i < n; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }
  return memo[n];
};

function bottomUp(nums) {
  const n = nums.length;
  let memo = Array(n).fill(-1);
  function robHouse(i) {
    if (i < 0) return 0;
    if (memo[i] >= 0) return memo[i];
    memo[i] = Math.max(robHouse(i - 2) + nums[i], robHouse(i - 1));
    return memo[i];
  }
  return robHouse(n - 1);
}