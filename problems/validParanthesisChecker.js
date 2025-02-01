/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (str) {
  if (str[0] == ')') return false;
  const n = str.length;
  let close = 0, open = 0;
  for (let c of str) {
    if (c == '(') {
      open++;
      close++;
    } else if (c == ')') {
      open--;
      close--;
    } else {
      open--;
      close++;
    }
    if (open < 0) open = 0;
    if (close < 0) return false;
  }
  return open == 0;
};