/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let long = 0;
  for (let n of set) {
    let len = 0;
    if (!set.has(n - 1)) {
      while (set.has(n + len)) {
        len++;
      }
      long = Math.max(long, len);
    }
  }
  return long;
};