/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expr) {
  if (expr[0] == 't' || expr[0] == 'f') return expr[0] == 't';
  const n = expr.length;
  const s = [];
  const special = new Set(['&', '!', '|']);
  const useless = new Set([',', '(', ')'])
  let i = 0;
  while (i < n) {
    let char = expr[i];
    if (char == ')') {
      let trues = false, falses = false;
      while (!special.has(s[s.length - 1])) {
        let popped = s.pop();
        if (popped == 't') trues = true;
        if (popped == 'f') falses = true;
      }
      const symbol = s.pop();
      if (symbol == '&') s.push((trues && !falses) ? 't' : 'f');
      else if (symbol == '|') s.push(trues ? 't' : 'f');
      else s.push((!(trues)) ? 't' : 'f');
    }
    if (!useless.has(char)) s.push(char);
    i++;
  }
  return s.pop() == 't';
};

console.log(parseBoolExpr('!(f)'));