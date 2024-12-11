var Trie = function () {
  this.tree = {};
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  let temp = this.tree;
  for (let char of word) {
    if (char in temp) {
      temp = temp[char];
      continue;
    }
    temp[char] = {};
    temp = temp[char];
  }
  temp['.'] = {};
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  let temp = this.tree;
  for (let char of word) {
    if (char in temp) {
      temp = temp[char];
    } else return false;
  }
  return '.' in temp;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  let temp = this.tree;
  for (let char of prefix) {
    if (char in temp) {
      temp = temp[char];
    } else return false;
  }
  return true;
};

Trie.prototype.removeWord = function(word) {
  function _del(char, i, temp) {
    if (i == word.length) {
      delete temp['.'];
      return;
    }
    _del(word[i + 1], i + 1, temp[char]);

    let len = Object.values(temp[char]).length;
    
    if (len == 0) {
      delete temp[char];
    }
  }
  _del(word[0], 0, this.tree);
}


const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.startsWith("app"));
trie.insert("appzza");
console.log(trie.search("appzza"));
trie.removeWord("appzza")
console.log(trie.search("appzza"));