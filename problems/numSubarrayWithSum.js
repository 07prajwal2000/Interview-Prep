/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  return find(nums, goal) - find(nums, goal - 1);
};

function find(nums, goal) {
  if (goal < 0) return 0;
  const n = nums.length;
  let ans = 0, tmp = 0, l = 0, r = 0;
  while (r < n) {
    tmp += nums[r];
    while (tmp > goal) {
      tmp -= nums[l];
      l++;
    }
    ans += r - l + 1;
    r++;
  }
  return ans;
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); 