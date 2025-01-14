/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const set = new Set(wordList);
  const q = [[beginWord, 1]];

  if (!set.has(endWord)) return 0;
  set.delete(beginWord);

  while (q.length > 0) {
    const len = q.length;
    for (let k = 0; k < len; k++) {
      const t = q.shift();
      const temp = t[0].split("");
      let steps = t[1];
      if (t[0] == endWord) {
        return steps;
      }
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < 26; j++) {
          const char = String.fromCharCode("a".charCodeAt(0) + j);
          let tempChar = temp[i];
          temp[i] = char;
          let str = temp.join("");
          if (set.has(str)) {
            set.delete(str);
            q.push([str, steps + 1]);
          }
          temp[i] = tempChar;
        }
      }
    }
  }
  return 0;
};