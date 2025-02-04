/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    let left = nums[mid - 1] ?? -Infinity;
    let right = nums[mid + 1] ?? -Infinity;
    let val = nums[mid];
    if (val > left && val > right) return mid;
    else if (left > val) r = mid - 1;
    else l = mid + 1;
  }
};

console.log(findPeakElement([-2,-1,0,-3]));