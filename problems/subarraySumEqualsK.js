/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let count = 0, sum = 0;
  for (let num of nums) {
    sum += num;
    if (sum == k) count++;
    if (map.get(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};

console.log(subarraySum([1,1,1, 4, 3, 2, 1], 2));