/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let stack = [];
  for (let c of s) {
    if (isDigit(c)) {
      stack.pop();
    } else stack.push(c);
  }
  return stack.join('');
};

function isDigit(c) {
  let ascii = c.charCodeAt(0);
  return ascii >= '0'.charCodeAt(0) && ascii <= '9'.charCodeAt(0);
}