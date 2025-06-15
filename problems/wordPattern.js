/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  const map = new Map(), map2 = new Map();
  if (words.length != pattern.length) return false;
  for (let i = 0; i < words.length; i++) {
    const c = pattern[i];
    const word = words[i];
    if (map.has(c) && map.get(c) != word) return false;
    if (map2.has(word) && map2.get(word) != c) return false;
    map.set(c, word);
    map2.set(word, c)
  }
  return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));
