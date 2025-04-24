/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let cur = 0, prev = 0, next = 0;
  const n = nums.length;
  // const memo = Array(n + 1).fill(-1);
  cur = nums[0];
  for (let i = 1; i < n; i++) {
    next = Math.max(cur, prev + nums[i]);
    prev = cur;
    cur = next;
  }
  return cur;
};

function topDown(nums) {
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