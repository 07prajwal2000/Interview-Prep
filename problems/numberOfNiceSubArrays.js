/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  return find(nums, k) - find(nums, k - 1);
};

function find(nums, goal) {
  if (goal < 0) return 0;
  const n = nums.length;
  let ans = 0, tmp = 0, l = 0, r = 0;
  while (r < n) {
    tmp += (nums[r] & 1);
    while (tmp > goal) {
      tmp -= (nums[l] & 1);
      l++;
    }
    ans += r - l + 1;
    r++;
  }
  return ans;
}

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));