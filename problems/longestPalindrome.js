/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0, end = 0;
  function equal(l, r) {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  }
  for (let i = 0; i < s.length; i++) {
    let lenA = equal(i, i); // for odd length
    let lenB = equal(i, i + 1); // for even length cases
    // getting the maximum length from both
    let len = Math.max(lenA, lenB);
    // "end - start" is to get the previous length, and comparing it with current one.
    if (len > end - start) {
      // getting the start and end index from ith position to length
      start = i - ((len - 1) >> 1);
      end = i + (len >> 1);
    }
  }
  // adding +1 to end is to include the ending character
  // otherwise substring will exclude the end character
  return s.substring(start, end + 1);
};