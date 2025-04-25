/**
 * @param {number[]} nums
 * @return {number}
 */
var robSpace = function (nums) {
  const n = nums.length;
  if (n == 1) return nums[0];
  function robHouse(s, e) {
    const memo = Array(n + 1).fill(-1);
    memo[s] = 0;
    memo[s + 1] = nums[s];
    for (let i = s + 1; i < e; i++) {
      memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
    }
    return memo[e];
  };
  return Math.max(robHouse(0, n - 1), robHouse(1, n));
};

var rob = function (nums) {
  const n = nums.length;
  if (n == 1) return nums[0];
  function robHouse(s, e) {
    let prev = 0, cur = 0;
    for (let i = s; i <= e; i++) {
      let tmp = Math.max(cur, prev + nums[i]);
      prev = cur;
      cur = tmp;
    }
    return cur;
  };
  return Math.max(robHouse(0, n - 2), robHouse(1, n - 1));
};


console.log(rob([2, 3, 2]));