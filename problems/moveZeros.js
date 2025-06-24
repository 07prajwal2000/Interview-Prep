/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let left = 0;
  for (let r = 0; r < n; r++) {
    const num = nums[r];
    if (num == 0) continue;
    nums[left] = nums[r];
    if (r != left) nums[r] = 0;
    left++;
  }
};

function soln2(nums) {
  const n = nums.length;
  let zeros = 0, l = 0, r = 0;
  while (r < n) {
    while (r < n && nums[r] == 0) {
      r++;
      zeros++;
    }
    if (r < n) nums[l] = nums[r];
    l++;
    r++;
  }
  for (let i = 0; i < zeros; i++) {
    nums[n - i - 1] = 0;
  }
}