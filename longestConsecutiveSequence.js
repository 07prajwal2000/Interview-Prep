/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  let min = Infinity;
  for (let n of nums) {
    min = Math.min(min, n);
    set.add(n);
  }
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

console.log(longestConsecutive([100,4,200,1,3,2]));