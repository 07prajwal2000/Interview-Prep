/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const m = nums2.length;
  let n = nums1.length;
  let s = [], map = {};
  let ans = [];
  for (let i = 0; i < m; i++) {
    let cur = nums2[i];
    while (s.length > 0 && cur > s[s.length - 1]) {
      map[s.pop()] = cur;
    }
    s.push(cur);
  }
  for (let i = 0; i < n; i++) {
    let cur = nums1[i];
    ans.push(cur in map ? map[cur] : -1);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));