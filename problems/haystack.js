/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length, m = needle.length;
  for (let i = 0; i < n; i++) {
    let j = i, k = 0;
    while (k < m && j < n && haystack[j] == needle[k]) {
      k++;
      j++;
    }
    if (k == m) return i;
  }
  return -1;
};