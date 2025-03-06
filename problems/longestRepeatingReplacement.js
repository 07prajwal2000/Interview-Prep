/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const map = {}, n = s.length;
  let l = 0, size = 0;
  for (let r = 0; r < n; r++) {
    let windowLength = r - l + 1;
    const char = s[r];
    map[char] = char in map ? map[char] + 1 : 1;
    const mostRepeatingCharCount = findMostRepeatingCharCount(map);

    if ((windowLength - mostRepeatingCharCount) > k) {
      map[s[l]]--;
      l++;
    }

    windowLength = r - l + 1;
    size = Math.max(windowLength, size);
  }
  return size;
};

function findMostRepeatingCharCount(map) {
  let max = 0;
  for (let key in map) {
    max = Math.max(map[key], max);
  }
  return max;
}

console.log(characterReplacement("AABABBA", 1));