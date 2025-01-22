/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let open = 0;
  let l = 0, ans = [];
  for (let r = 0; r < s.length; r++) {
    const cur = s[r];
    if (cur == '(') {
      open++;
    } else {
      open--;
    }
    if (open == 0) {
      ans.push(s.substring(l + 1, r));
      l = r + 1;
    }
  }
  return ans.join("");
};

console.log(removeOuterParentheses("(()())(())"));