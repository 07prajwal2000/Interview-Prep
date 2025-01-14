/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let r = 0, l = 0, max = 0, zeros = 0;
  const n = nums.length;
  while (r < n) {
    if (nums[r] == 0) zeros++;
    while (zeros > k) {
      if (nums[l] == 0) zeros--;
      l++;
    }
    max = Math.max(r - l + 1, max);
    r++;
  }
  return max;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // 10