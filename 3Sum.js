/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  const n = nums.length;
  nums = nums.sort((a, b) => (a - b));
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1, k = n - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
      } else if (sum > 0) {
        k--;
      } else j++;
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));