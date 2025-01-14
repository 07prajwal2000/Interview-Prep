/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const zero = "0".charCodeAt(0);
  const nine = "9".charCodeAt(0);
  let start = -1, end = 0, neg = false;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    const isNumber = (cur.charCodeAt(0) >= zero && nine >= cur.charCodeAt(0));
    const specialChar = isSpecial(cur);
    if (cur == '-' && start == -1) neg = true;
    if (specialChar && start != -1) break;
    if (i > 0 && isSpecial(s[i - 1]) && specialChar && cur != " " && s[i - 1] != " ") break;
    if (i > 0 && cur == " " && isSpecial(s[i - 1]) && s[i - 1] != " ") break;
    if (specialChar) continue;
    if (!isNumber) break;
    if (start == -1) {
      start = i;
    }
    end = i;
  }
  if (start == -1 || isSpecial(s[start])) return 0;
  let res = parseInt(s.substring(start, end + 1));
  const max = Math.pow(2, 31);
  if (res >= max) res = neg ? max : max - 1;
  if (neg) res = -res
  return res;
};

function isSpecial(c) {
  return c == "+" || c == "-" || c == " ";
}

console.log(myAtoi("  +  413"));