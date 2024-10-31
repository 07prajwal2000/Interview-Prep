/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0, j = s.length - 1;
  while (i <= j) {
    if (s[i] == " " || !isAlphaNum(s[i])) {
      i++;
      continue;
    }
    if (s[j] == " " || !isAlphaNum(s[j])) {
      j--;
      continue;
    }
    if (!isEqual(s[i], s[j])) return false;
    i++;
    j--;
  }
  return true;
};

function isAlphaNum(a) {
  let code = a.charCodeAt(0);
  if (code >= 48 && code <= 57) return true;
  if (code >= 97 && code <= 122) return true;
  if (code >= 65 && code <= 90) return true;
  return false;
}

function isEqual(a, b) {
  let aChar = a.charCodeAt(0);
  let bChar = b.charCodeAt(0);
  if (aChar >= 48 && aChar <= 57 && aChar != bChar) {
    return false; // check for number
  }
  // 97 - 122 - small
  // 65 - 90 - big
  aChar = aChar >= 97 ? aChar - (97 - 65) : aChar;
  bChar = bChar >= 97 ? bChar - (97 - 65) : bChar;
  return aChar == bChar;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));