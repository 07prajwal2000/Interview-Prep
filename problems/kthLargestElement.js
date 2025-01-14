/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let map = {}, max = -Infinity;
  for (let num of nums) {
    if (num in map) map[num]++;
    else map[num] = 1;

    max = Math.max(num, max);
  }
  while (k > 1 || !(max in map)) {
    if (max in map) {
      if (map[max] > 1) {
        map[max]--;
      } else {
        delete map[max];
        max--;
      }
      k--;
      continue;
    }
    max--;
  }
  return max;
};

console.log(findKthLargest([10, 20, 30, 40, 50, 60, 60], 2));
console.log(findKthLargest([3,2,1,5,6,4], 4));
