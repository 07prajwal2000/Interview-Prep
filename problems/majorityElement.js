/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let num = nums[0];
  let count = 0;
  for (let n of nums) {
    if (n == num) {
      count++
    } else {
      count--;
    }
    if (count == 0) {
      count = 1;
      num = n;
    }
  }
  return num;
};

console.log(majorityElement([2,2,1,1,1,2,2]));