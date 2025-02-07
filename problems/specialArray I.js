/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i], prev = nums[i - 1];
    if ((cur & 1) == (prev & 1)) return false;
  }
  return true;
};

console.log(isArraySpecial([4, 3, 1, 6]));
