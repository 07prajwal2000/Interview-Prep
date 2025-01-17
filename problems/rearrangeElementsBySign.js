/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let posIdx = 0, negIdx = 1;
  const n = nums.length;
  const ans = Array(n);
  for (let num of nums) {
    if (num < 0) {
      ans[negIdx] = num;
      negIdx += 2;
    } else {
      ans[posIdx] = num;
      posIdx += 2;
    }
  }
  return ans;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));