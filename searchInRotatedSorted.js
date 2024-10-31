/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  // just for some test cases.
  if (nums[l] == target) return l;
  if (nums[r] == target) return r;

  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] == target) return mid;
    // here we'll check which part is sorted
    if (nums[l] <= nums[mid]) { // left part
      // check where the target lies in left part
      // in range from left to mid pointer
      if (nums[l] <= target && nums[mid] >= target) r = mid - 1;
      else l = mid + 1
    } else { // right part
      if (nums[r] >= target && nums[mid] <= target) {
        l = mid + 1;
      } else r = mid - 1;
    }
  }
  return nums[l] == target ? l : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4