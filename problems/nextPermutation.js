/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  let i = n - 2;
  while (nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i == -1) return nums.reverse();
  let j = n - 1;
  while (nums[i] >= nums[j]) {
    j--;
  }
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
  let l = i + 1, r = n - 1;
  while (l < r) {
    tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }
  return nums;
};

console.log(nextPermutation([1, 1]));