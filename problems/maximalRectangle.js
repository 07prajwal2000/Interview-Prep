// https://leetcode.com/problems/maximal-rectangle/description/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  let heights = Array(n).fill(0);
  let maxHeight = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == "0") continue;
      let k = i;
      let count = 0;
      while (k > 0 && matrix[k][j] != "0") {
        count++;
        k--;
      }
      heights[j] = count;
    }
    maxHeight = Math.max(maxHeight, largestRectangleArea(heights));
  }
  return maxHeight;
};

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

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));