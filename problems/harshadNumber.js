/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  if (x < 10) return x;
  if (x == 100) return 1;
  let d1 = x % 10;
  let xx = parseInt(x / 10);
  let d2 = xx % 10;
  return x % (d1 + d2) != 0 ? -1 : d1 + d2;
};