/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const n = board.length, m = board[0].length;
  const trie = {};
  const ans = [];
  function construct(word) {
    let tmp = trie;
    for (let c of word) {
      if (c in tmp) tmp = tmp[c];
      else {
        tmp[c] = {};
        tmp = tmp[c];
      }
    }
    tmp['.'] = word;
  }
  for (let word of words) construct(word);
  function find(i, j, dict) {
    if ('.' in dict) {
      ans.push(dict['.']);
      delete dict['.'];
    }
    if (i < 0 || j < 0 || i >= n || j >= m) return;
    const c = board[i][j];
    if (c == '$') return;
    if (!(c in dict)) return;
    board[i][j] = '$';
    find(i + 1, j, dict[c]);
    find(i - 1, j, dict[c]);
    find(i, j + 1, dict[c]);
    find(i, j - 1, dict[c]);
    board[i][j] = c;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) find(i, j, trie);
  }
  return ans;
};