/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElementSoln2 = function (nums1, nums2) {
  const m = nums2.length;
  let n = nums1.length;
  let s = [], nge = Array(m), map = {};

  for (let i = m - 1; i >= 0; i--) {
    let cur = nums2[i];
    map[cur] = i;

    if (s.length == 0) {
      nge[i] = -1;
    } else {
      while (s.length && cur > (s[s.length - 1] ?? -1e9)) {
        s.pop();
      }
      nge[i] = s[s.length - 1] ?? -1;
    }

    s.push(cur);
  }

  let ans = [];

  for (let num of nums1) {
    ans.push(nge[map[num]]);
  }
  return ans;
};

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