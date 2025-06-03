/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  function swap(l, r) {
    while (l <= r) {
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
      l++;
      r--;
    }
  }
  k %= n;
  swap(0, n - 1);
  swap(0, k - 1);
  swap(k, n - 1);
};