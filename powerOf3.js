/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false;
  let pow = 1;
  while (pow < n) pow *= 3;
  return [pow, pow == n];
};
console.log(isPowerOfThree(45));