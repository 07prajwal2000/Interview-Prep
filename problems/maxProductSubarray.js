var maxProduct = function (nums) {
  let l = 1, r = 1, max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    l = (l ? l : 1) * nums[i];
    r = (r ? r : 1) * nums[nums.length - 1 - i];
    max = Math.max(max, l, r);
  }
  return max;
};