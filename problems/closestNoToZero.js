/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let ans = nums[0];
  for (let num of nums) {
      if (num == 0) return 0;
      if (Math.abs(ans) == num) ans = num;
      if (Math.abs(num) < Math.abs(ans)) ans = num;
  }
  return ans;
};

console.log(findClosestNumber([2, -1, 1]));