/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const ans = Array(n);
  let prefix = nums[0];
  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= postfix;
    postfix *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1,2,3,4]));