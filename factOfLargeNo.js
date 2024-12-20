function factorial(n) {
  let fact = BigInt(1);
  for (let i = 1; i <= n; i++) {
    fact *= BigInt(i);
  }
  let ans = [];
  while (fact > 0) {
    ans.push(fact % BigInt(10));
    fact = fact / BigInt(10);
  }
  return ans.reverse();
}