/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const ans = [];
  const n = digits.length;
  function backtrack(i, temp) {
    if (i == n) {
      ans.push(temp);
      return;
    }
    const chars = map[digits[i]];
    for (let j = 0; j < chars.length; j++) {
      backtrack(i + 1, temp + chars[j]);
    }
  }
  backtrack(0, "");
  return ans;
};

console.log(letterCombinations("23"));