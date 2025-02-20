/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const trie = {}, n = s.length;
  let dp = { };
  
  for (let word of wordDict) {
    let tmp = trie;
    for (let c of word) {
      if (!(c in tmp)) {
        tmp[c] = {};
        tmp = tmp[c];
      } else {
        tmp = tmp[c];
      }
    }
    tmp['.'] = 1;
  }

  function exists(i, j) {
    let tmp = trie;
    while (i <= j) {
      const c = s[i];
      if (!(c in tmp)) return false;
      tmp = tmp[c];
      i++;
    }
    return '.' in tmp;
  }
  
  function find(i) {
    if (i in dp) return dp[i];
    if (i == n) return true;
    for (let j = i; j < n; j++) {
      if (exists(i, j)) {
        dp[i] = true;
        if (find(j + 1)) return true;
      }
    }
    dp[i] = false;
    return false;
  }
  return find(0);
};

console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));