/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0, mid = 0, r = nums.length - 1;
  while (mid <= r) {
    if (nums[mid] == 0) {
      let t = nums[l];
      nums[l] = 0;
      nums[mid] = t;
      l++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      let t = nums[r];
      nums[r] = nums[mid];
      nums[mid] = t;
      r--;
    }
  }
  return nums;
};

console.log(sortColors([1, 1, 2, 2, 0, 0, 1, 2]));