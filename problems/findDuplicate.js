/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let n = nums.length;
  if (n == 1) return nums[0];
  let slow = 0, fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) break;
  }
  fast = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));