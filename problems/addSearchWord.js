
var WordDictionary = function () {
  this.trie = {};
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  let tmp = this.trie;
  for (let c of word) {
    if (c in tmp) tmp = tmp[c];
    else {
      tmp[c] = {};
      tmp = tmp[c];
    }
  }
  tmp['$'] = 1;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {
  return find(word, 0, this.trie);
};

function find(word, i, trie) {
  for (let j = i; j < word.length; j++) {
    const c = word[j];
    if (c == '.') {
      for (let k in trie) {
        if (k == '$') continue;
        if (find(word, j + 1, trie[k])) return true;
      }
    }
    if (c in trie) trie = trie[c];
    else return false;
  }
  return '$' in trie;
}
/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True