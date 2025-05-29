/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let idx = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  return idx;
};