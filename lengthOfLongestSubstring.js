/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
    while (l < i && set.has(s[i])) {
      set.delete(s[l]);
      l++;
    }
    count = Math.max(count, i - l + 1);
    set.add(s[i]);
  }
  return count;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
