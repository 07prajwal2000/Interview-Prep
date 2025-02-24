/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k == 1) return nums;
  let q = [], ans = [], n = nums.length;

  for (let i = 0; i < n; i++) {
    let cur = nums[i];

    if (q.length && i - q[0][0] == k) q.shift();

    while (q.length && cur >= q[q.length - 1][1]) {
      q.pop();
    }

    q.push([i, cur]);

    if (i >= k - 1) {
      ans.push(q[0][1]);
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1,2,3,4,3,2,1], 2));