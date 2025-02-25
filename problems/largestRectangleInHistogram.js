// https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/6468049/javascript-solution-using-monotonic-stac-t2un/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let s = [], n = heights.length;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    let cur = heights[i];
    while (s.length && s[s.length - 1][1] > cur) {
      let [idx, ele] = s.pop();
      let left = s.length ? s[s.length - 1][0] : -1;
      maxArea = Math.max(maxArea, ele * (i - left - 1));
    }
    s.push([i, cur]);
  }
  while (s.length) {
    let [idx, ele] = s.pop();
    let left = s.length ? s[s.length - 1][0] : -1;
    maxArea = Math.max(maxArea, ele * (n - left - 1));
  }
  return maxArea;
};