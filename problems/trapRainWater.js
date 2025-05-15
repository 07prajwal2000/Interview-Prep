/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let water = 0;
  const leftHeight = Array(n), rightHeight = Array(n);
  leftHeight[0] = height[0];
  rightHeight[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    let j = n - i - 1;
    leftHeight[i] = Math.max(leftHeight[i - 1], height[i]);
    rightHeight[j] = Math.max(rightHeight[j + 1], height[j]);
  }
  for (let i = 1; i < n - 1; i++) {
    water += Math.min(leftHeight[i], rightHeight[i]) - height[i];
  }
  return water;
};