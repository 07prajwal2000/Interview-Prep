/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let inc = 1, dec = 1;
  let tInc = 1, tDec = 1;
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    if (cur > nums[i - 1]) tInc++;
    else tInc = 1;
    inc = Math.max(inc, tInc);
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let cur = nums[i];
    if (cur > nums[i + 1]) tDec++;
    else tDec = 1;
    dec = Math.max(dec, tDec);
  }

  return Math.max(inc, dec);
};

console.log(longestMonotonicSubarray([4, 22, 48, 13, 9, 38, 7, 50, 44, 9]));