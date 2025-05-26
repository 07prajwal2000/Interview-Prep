/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i] + carry;
    if (digit == 10) {
      carry = 1;
      digits[i] = 0;
    } else {
      carry = 0;
      digits[i] = digit;
      break;
    }
  }
  if (carry) digits.unshift(1);
  return digits;
};