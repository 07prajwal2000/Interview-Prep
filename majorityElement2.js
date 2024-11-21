/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let num1 = -1, num2 = -1;
  let c1 = 0, c2 = 0;
  const n3 = Math.floor(nums.length / 3);
  for (let num of nums) {
      if (c1 == 0) {
          num1 = num;
      } else if (c2 == 0) {
          num2 = num;
      }
      if (num1 == num) c1++;
      else if (num2 == num) c2++;
      else {
          c1--;
          c2--;
      }
  }
  c1 = 0;
  c2 = 0;
  for (let num of nums) {
      if (num1 == num) c1++;
      else if (num2 == num) c2++;
  }
  const ans = [];
  if (c1 > n3) ans.push(num1);
  if (c2 > n3) ans.push(num2); 
  return ans;
};

console.log(majorityElement([2, 2, 1, 3]));