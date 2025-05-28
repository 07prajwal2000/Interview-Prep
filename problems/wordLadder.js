/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const q = [beginWord];
  let ans = 0;
  if (!wordList.includes(endWord)) return 0;
  const set = new Set(wordList), visited = new Set([beginWord]);
  wordList = wordList.filter(x => x != beginWord);

  while (q.length) {
    let len = q.length;
    ans++;
    while (len-- > 0) {
      const word = q.shift();
      for (let i = 0; i < word.length; i++) {
        const tmp = word.split("");
        for (let j = 0; j < 26; j++) {
          const char = String.fromCharCode("a".charCodeAt(0) + j);
          tmp[i] = char;
          const newWord = tmp.join("");
          if (visited.has(newWord)) continue;
          if (newWord == endWord) return ans + 1;
          if (set.has(newWord)) {
            set.delete(newWord);
            visited.add(newWord);
            q.push(newWord);
          }
        }
      }
    }
  }
  return 0;
};

function findDiff(m1, m2) {
  let diff = 0;
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode('a'.charCodeAt(0) + i);
    if (m1[char] == m2[char]) continue;
    diff++;
  }
  return diff >> 1;
}

function createMap(word) {
  let map = {};
  for (let c of word) {
    map[c] = c in map ? map[c] + 1 : 1;
  }
  return map;
}

var ladderLength2 = function (beginWord, endWord, wordList) {
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

console.log(ladderLength("a", "c", ["a","b","c"]));
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));