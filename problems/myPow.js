/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let temp = n < 0 ? -n : n;
  let ans = 1;
  while (temp) {
    if (temp % 2) {
      ans *= x;
      temp--;
    } else {
      x *= x;
      temp = temp / 2;
    }
  }
  if (n < 0) ans = 1 / ans;
  return ans;
};