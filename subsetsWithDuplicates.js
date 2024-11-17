/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [], temp = [];
  nums = nums.sort();
  function backtrack(i) {
    if (i == nums.length) {
      ans.push([...temp]);
      return;
    }
    temp.push(nums[i]);
    backtrack(i + 1);
    temp.pop();
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
    backtrack(i + 1);
  }
  backtrack(0);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2]));