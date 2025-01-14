/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  let i = 0;
  for (let num of nums) {
    const sub = target - num;
    if (sub in map) {
      return [i, map[sub]]
    }
    map[num] = i;
    i++;
  }
};

console.log(twoSum([2,7,11,15]));