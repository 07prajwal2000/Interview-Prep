/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = 0;
  const n = s.length;
  let i = 0;
  const map = {};
  for (let j = 0; j < n; j++) {
    const c = s[j];
    let len = j - i + 1;

    map[c] = c in map ? map[c] + 1 : 1;

    if ((len - getMaxVal(map)) > k) {
      map[s[i]]--;
      i++;
    }
    len = j - i + 1;
    count = Math.max(count, len);
  }
  return count;
};

function getMaxVal(obj) {
  let m = 0;
  for (let key in obj) {
    m = Math.max(m, obj[key]);
  }
  return m;
}

console.log(characterReplacement("AABABBA", 1));