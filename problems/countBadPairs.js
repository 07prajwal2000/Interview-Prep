/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let count = 0, n = nums.length;
  let map = {};
  let totalPairs = (n * (n - 1)) / 2;

  for (let i = 0; i < n; i++) {
    let cur = nums[i];
    let key = (cur - i);

    totalPairs -= map[key] ?? 0;
    map[key] = key in map ? map[key] + 1 : 1;
  }

  return totalPairs;

  // naive
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let key = `${i}-${j}`;
      if (key in map) continue;
      if ((nums[j] - nums[i]) != (j - i)) {
        map[key] = 1;
        count++;
      }
    }
  }
  return count;
};

console.log(countBadPairs([4, 1, 3, 3]));