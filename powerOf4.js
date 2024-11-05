/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  if (n == 1) return true;
  let pow = 1;
  while (n > pow) {
    pow *= 4;
  }
  return pow == n;
};

console.log(isPowerOfFour(16));