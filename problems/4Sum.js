/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const ans = [];
  nums.sort((a, b) => (a - b));
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let k = j + 1, l = n - 1;
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum == target) {
          ans.push([nums[i], nums[j], nums[k], nums[l]])
          k++;
          l--;
          while (nums[k] == nums[k - 1]) k++;
          while (nums[l] == nums[l + 1]) l--;
        } else if (sum > target) l--;
        else k++;
      }
    }
  }
  return ans;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));