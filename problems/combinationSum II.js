/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, target) {
  const n = nums.length;
  nums = nums.sort();
  let ans = [], temp = [];

  function find(curSum, idx) {
    if (curSum == target) {
      ans.push([...temp]);
      return;
    }
    if (curSum > target) return;
    for (let i = idx; i < n; i++) {
      if (i > idx && nums[i - 1] == nums[i]) continue;
      temp.push(nums[i]);
      find(curSum + nums[i], i + 1);
      temp.pop();
    }
  }
  find(0, 0);
  return ans;
};