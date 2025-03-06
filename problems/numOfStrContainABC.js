/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const map = { 'a': 0, 'b': 0, 'c': 0 }, n = s.length;
  let ans = 0, left = 0;
  for (let right = 0; right < n; right++) {
    const char = s[right];
    map[char]++;
    while (map['a'] && map['b'] && map['c']) {
      map[s[left++]]--;
    }
    ans += left;
  }
  return ans;
};

console.log(numberOfSubstrings('abc'));