/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0, r = height.length - 1;
  let ans = 0;
  while (l < r) {
    const h = Math.min(height[l], height[r]);
    const w = r - l;
    const area = h * w;
    ans = Math.max(ans, area);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return ans;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));