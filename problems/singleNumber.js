/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    ans ^= n;
  }
  return ans;
};