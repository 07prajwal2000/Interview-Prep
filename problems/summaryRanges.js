/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const n = nums.length, ans = [];
  let i = 0;
  while (i < n) {
    let start = nums[i];
    while (i + 1 < n && nums[i] == nums[i + 1] - 1) i++;
    if (start == nums[i]) {
      ans.push(start.toString());
    }
    else {
      ans.push(`${start}->${nums[i]}`);
    }
    i++;
  }
  return ans;
};