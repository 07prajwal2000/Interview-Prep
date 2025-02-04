/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let rotated = false;
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i], prev = nums[i - 1];
    if (cur < prev) {
      if (rotated) return false;
      rotated = true;
    }
  }
  if (rotated) {
    return nums[0] >= nums[nums.length - 1];
  }
  return true;
};