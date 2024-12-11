// Js lang was not there
// https://www.naukri.com/code360/problems/implement-trie_1387095

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
      temp["len"]++;
      continue;
    }
    temp[char] = {
      "len": 1
    };
    temp = temp[char];
  }
  if ('.' in temp) temp['.']++;
  else temp['.'] = 1;
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

Trie.prototype.countWordsEqualTo = function(word) {
  let temp = this.tree;
  for (let char of word) {
    if (char in temp) temp = temp[char];
    else return 0;
  }
  return "." in temp ? temp['.'] : 0;
}

Trie.prototype.countWordsStartingWith = function(word) {
  let temp = this.tree;
  for (let char of word) {
    if (char in temp) temp = temp[char];
    else return 0;
  }
  return temp.len;
}

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

Trie.prototype.removeWord = function (word) {
  function _del(char, i, temp) {
    if (!temp || !char) return;
    if (char == '.' && temp[char] == 1) {
      delete temp['.'];
      return;
    }
    _del(i + 1 == word.length ? '.' : word[i + 1], i + 1, temp[char]);
    let wordCount = 0;
    if (char == ".") {
      wordCount = --temp['.'];
    } else {
      wordCount = --temp[char].len;
    }

    if (wordCount == 0) delete temp[char]["len"];
    
    let len = Object.values(temp[char]).length;

    if (len == 0 && char != '.') {
      delete temp[char];
    }
  }
  _del(word[0], 0, this.tree);
}

const trie = new Trie();
trie.insert("apple");
trie.insert("apple");
trie.insert("appy");
trie.insert("appyl");
console.log(trie.countWordsEqualTo("apple"));
console.log(trie.countWordsStartingWith("app"));

trie.removeWord("apple")
trie.removeWord("apple")
console.log(trie.search("apple"));
console.log(trie.startsWith("app"));
trie.insert("appzza");
console.log(trie.search("appzza"));
trie.removeWord("appzza")
console.log(trie.search("appzza"));