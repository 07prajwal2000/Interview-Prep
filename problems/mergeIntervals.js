/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (nums) {
  nums.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else return -1;
  });
  const res = [];
  let min = nums[0][0], max = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    if (cur[0] <= max) {
      max = Math.max(cur[1], max);
    } else {
      res.push([min, max]);
      min = cur[0];
      max = Math.max(cur[1], max);
    }
  }
  res.push([min, max]);

  return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));