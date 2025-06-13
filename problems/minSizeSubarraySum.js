/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (t, nums) {
  const n = nums.length;
  let sum = 0, r = 0, size = 1e9;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (sum >= t) size = Math.min(i - r + 1, size);
    while (sum >= t) {
      sum -= nums[r];
      r++;
      if (sum >= t) size = Math.min(i - r + 1, size);
    }
  }
  return size == 1e9 ? 0 : size;
};

console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]));