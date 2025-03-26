/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	const n1 = num1.length,
		n2 = num2.length;
	const ans = Array(n1 + n2).fill(0);
	num1 = [...num1].reverse();
	num2 = [...num2].reverse();
  
	for (let i = 0; i < n1; i++) {
		for (let j = 0; j < n2; j++) {
			const a = Number(num1[i]);
			const b = Number(num2[j]);

      const curPos = j + i;
			const mul = a * b + ans[curPos];
      const rem = mul % 10;
      const carry = Math.floor(mul / 10);
      
      ans[curPos] = rem;
      ans[curPos + 1] += carry;
		}
	}
  while (ans[ans.length - 1] == 0) ans.pop();
	return ans.reverse().join("");
};

console.log(multiply("31", "121"));