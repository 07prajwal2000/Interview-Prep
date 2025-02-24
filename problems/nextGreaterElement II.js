/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  let s = [], nge = Array(n);
  for (let i = (n * 2) - 1; i >= 0; i--) {
    let idx = i % n;
    let cur = nums[idx];
    while (s.length && cur >= s[s.length - 1]) {
      s.pop();
    }
    if (i < n) {
      let top = s[s.length - 1] ?? -1;
      nge[i] = top;
    }
    s.push(cur);
  }
  return nge;
};