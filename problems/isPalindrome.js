/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const n = s.length;
  let l = 0, r = n - 1;
  while (l <= r) {
    while (l < n && !isValid(s[l])) l++;
    while (r >= 0 && !isValid(s[r])) r--;
    if (l < n && r >= 0 && s[l].toLowerCase() != s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

function isValid(char) {
  const ascii = char.charCodeAt(0);
  return (ascii >= '0'.charCodeAt(0) && ascii <= '9'.charCodeAt(0)) || (ascii >= 'a'.charCodeAt(0) && ascii <= 'z'.charCodeAt(0)) || (ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0));
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));