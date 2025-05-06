/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};