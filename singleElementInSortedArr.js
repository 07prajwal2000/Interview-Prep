/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0, r = nums.length;
  while (l < r) {
    let mid = (l + r) >> 1;
    const mod = mid % 2;
    if ((mod == 0 && nums[mid] == nums[mid + 1]) || (mod == 1 && nums[mid] == nums[mid - 1])) {
      l = mid + 1;
    } else r = mid;
  }
  return nums[l];
};