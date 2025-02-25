/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let s = [], n = num.length;
  if (n == k) return "0";
  for (let digit of num) {
    let number = parseInt(digit);
    while (k && s.length && parseInt(s[s.length - 1]) > number) {
      s.pop();
      k--;
    }
    s.push(digit);
  }
  while (k) {
    k--;
    s.pop();
  }
  while (s.length && s[0] == '0') s.shift();
  return s.length ? s.join('') : '0';
};

console.log(removeKdigits('1432219', 3));