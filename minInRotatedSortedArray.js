/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0, r = nums.length - 1;
  if (nums[l] <= nums[r]) return nums[l];
  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    }
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[l];
};

console.log(findMin([3,4,5,1,2])); // 1
console.log(findMin([11,13,15,17])); // 11