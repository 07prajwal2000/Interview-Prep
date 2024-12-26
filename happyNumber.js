/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  function calc(num) {
    if (num == 1) return true;
    if (set.has(num)) return false;
    set.add(num);
    let sum = 0;
    while (num > 0) {
      let d = num % 10
      sum += (d * d);
      num = Math.floor(num / 10);
    }
    return calc(sum);
  }
  return calc(n);
};

console.log(isHappy(22));
