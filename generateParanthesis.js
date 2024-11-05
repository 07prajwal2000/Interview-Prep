/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const temp = [];

  function gen(open, close) {
    if (open == n && close == n) {
      res.push(temp.join(""));
      return;
    }
    if (open < n) {
      temp.push("(");
      gen(open + 1, close);
      temp.pop();
    }
    if (open > close) {
      temp.push(")");
      gen(open, close + 1);
      temp.pop();
    }
  }
  gen(0, 0);
  return res;
};

console.log(generateParenthesis(3));