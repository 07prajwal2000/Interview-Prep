/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const n = s.length;
  let i = 0;

  function myEval() {
    const stack = [];
    while (i < n) {
      const c = s[i];
      if (stack.length == 3) stack.push(compute(stack));
      if (c == ' ') {
        i++;
        continue;
      }
      if (c == '+' || c == '-') {
        i++;
        stack.push(c);
      }
      else if (c == '(') {
        i++;
        const ans = myEval();
        if (stack.length > 0 && stack[0] == '-') stack[0] = -ans;
        else stack.push(ans);
      }
      else if (c == ')') {
        i++;
        return compute(stack);
      }
      else {
        let j = i;
        while (isDigit(s[j])) j++;
        let num1 = parseInt(s.substring(i, j));
        const isNeg = Boolean(stack.length && stack[0] == '-');
        if (isNeg) stack[0] = -num1;
        else if (stack.length == 0) stack.push(num1);
        else {
          stack.push(num1);
          stack.push(compute(stack));
        }
        i = j;
      }
    }
    return compute(stack);
  }

  function compute(stack) {
    while (stack.length > 1) {
      const n2 = stack.pop();
      const sign = stack.pop();
      const n1 = stack.pop() || 0;
      stack.push(sign == '+' ? n2 + n1 : n1 - n2);
    }
    return stack.pop();
  }

  function isDigit(code) {
    return code >= '0' && code <= '9';
  }

  return myEval();
};

console.log(calculate("-(3+4)+5"));