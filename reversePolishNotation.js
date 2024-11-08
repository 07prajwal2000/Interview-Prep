/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const n = tokens.length;
  const stack = [];
  for (let i = 0; i < n; i++) {
    let cur = tokens[i];
    if (cur == "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (cur == "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (cur == "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (cur == "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(parseInt(b / a));
    } else {
      stack.push(parseInt(cur));
    }
  }
  return parseInt(stack[0]);
};

console.log(evalRPN(["2","1","+","3","*"])); // 9