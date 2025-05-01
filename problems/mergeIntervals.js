/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (nums) {
  nums.sort((a, b) => a[0] - b[0]);
  const res = [];
  let s = nums[0][0], e = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (e >= cur[0]) {
      s = Math.min(s, cur[0]);
      e = Math.max(e, cur[1]);
    } else {
      res.push([s, e]);
      s = cur[0];
      e = cur[1];
    }
  }
  res.push([s, e]);
  return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));