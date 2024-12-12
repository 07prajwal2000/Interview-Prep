/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  let l = 0, r = n - 1;
  let res = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let val = 0;
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      val = nums[l];
      l++;
    } else {
      val = nums[r];
      r--;
    }
    res[i] = val * val;
  }
  return res;
};

console.log(sortedSquares([-4,-3,-2,3,3]));