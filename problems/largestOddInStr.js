/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    const cur = num[i];
    if (Number(cur) & 1 == 1) return num.substring(0, i + 1);
  }
  return "";
};

function naive(num) {
  const set = new Set(["1", "3", "5", "7", "9"]);
  if (set.has(num[num.length - 1])) {
    return num;
  }
  let l = -1, r = -1;
  for (let i = 0; i < num.length; i++) {
    const cur = num[i];
    const isOdd = set.has(cur);
    if (l == -1 && isOdd) {
      l = i != 0 ? 0 : i;
      r = i;
    } else if (isOdd) {
      r = i;
    }
  }
  if (l == -1) return "";
  return num.substring(l, r + 1);
}

console.log(largestOddNumber("322235555222"));
