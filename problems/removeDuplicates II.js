/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let k = 0, i = 0;
  while (i < n) {
    let num = nums[i];
    let count = 0;
    while (i < n && nums[i] == num) {
      count++;
      i++;
    }
    for (let j = 1; j <= Math.min(count, 2); j++) {
      nums[k] = num;
      k++;
    }
  }
  return k;
};