/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) return 0;
  let l = 1, r = x, mid = 0;
  while (l <= r) {
    // mid = (l + r) >> 1;
    mid = parseInt(l + (r - l) / 2);
    const sqr = BigInt(mid) * BigInt(mid);
    if (sqr > x) {
      r = mid - 1;
    } else if (sqr < x) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return Math.round(r);
};

console.log(mySqrt(4));