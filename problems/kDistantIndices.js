/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const ans = [], n = nums.length;
  let i = 0, j = 0;
  while (j < n && i < n) {
    while (i < n && nums[i] != key) i++;
    if (i >= n) break;
    while (j < n) {
      const diff = Math.abs(i - j);
      if (diff <= k) ans.push(j);
      else if (j > i) {
        break;
      }
      j++;
    }
    i++;
  }
  return ans;
};