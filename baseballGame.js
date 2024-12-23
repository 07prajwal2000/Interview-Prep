var calPoints = function (operations) {
  let s = [];
  for (let op of operations) {
    if (op == "C") s.pop();
    else if (op == "D") {
      s.push(s[s.length - 1] * 2);
    } else if (op == "+") {
      s.push(s[s.length - 1] + s[s.length - 2]);
    } else {
      s.push(parseInt(op));
    }
  }
  let sum = 0;
  s.forEach(num => (sum += num));
  // while (s.length > 0) sum += s.pop();
  return sum;
};