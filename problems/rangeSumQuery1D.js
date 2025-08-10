/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const n = nums.length;
  const sum = Array(n).fill(0);
  sum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    sum[i] += sum[i - 1] + nums[i];
  }
  this.nums = nums;
  this.sum = sum;
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  return this.sum[right] - this.sum[left] + this.nums[left];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/