// https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/6468049/javascript-solution-using-monotonic-stac-t2un/
// https://leetcode.com/problems/maximal-rectangle/description/ - extended problem
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const s = [], n = heights.length;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const cur = heights[i];
    while (s.length && s[s.length - 1][0] > cur) {
      const [height] = s.pop();
      // need to take prev ele's index as bcz the area of the cur ele can be calculated till there
      const len = s.length ? s[s.length - 1][1] : -1;
      const width = (i - len - 1);
      const curArea = width * height;
      maxArea = Math.max(maxArea, curArea);
    }
    s.push([cur, i]);
  }
  while (s.length) { // if any elements, which are smaller than prev
    const [height] = s.pop();
    const len = s.length ? s[s.length - 1][1] : -1;
    const width = (n - len - 1); // why n, bcz there is no prev small element
    const curArea = width * height;
    maxArea = Math.max(maxArea, curArea);
  }
  return maxArea;
};
