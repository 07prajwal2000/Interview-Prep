/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length;
  let l = 0, r = n;
  while (l <= r) {
    const mid = (l + r) >> 1, val = nums[mid];
    if (val == target) {
      let ll = l, lr = mid;
      while (ll <= lr) {
        let lm = (ll + lr) >> 1;
        if (nums[lm] != target) ll = lm + 1;
        else lr = lm - 1;
      }
      let rl = mid, rr = r;
      while (rl <= rr) {
        let rm = (rl + rr) >> 1;
        if (nums[rm] != target) rr = rm - 1;
        else rl = rm + 1;
      }
      return [ll, rr];
    } else if (val > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));