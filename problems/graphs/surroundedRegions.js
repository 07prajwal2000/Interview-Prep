/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length, n = board[0].length;
  captureEdge(board);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == '*') board[i][j] = 'O';
      else if (board[i][j] == 'O') board[i][j] = 'X';
    }
  }
};

function captureEdge(board) {
  const m = board.length, n = board[0].length;
  for (let i = 0; i < m; i++) {
    if (board[i][0] == 'O') dfs(board, i, 0);
  }
  for (let i = 0; i < m; i++) {
    if (board[i][n - 1] == 'O') dfs(board, i, n - 1);
  }
  for (let i = 0; i < n; i++) {
    if (board[0][i] == 'O') dfs(board, 0, i);
  }
  for (let i = 0; i < n; i++) {
    if (board[m - 1][i] == 'O') dfs(board, m - 1, i);
  }
}
function dfs(board, i, j) {
  const m = board.length, n = board[0].length;
  if (i >= m || i < 0 || j >= n || j < 0 || board[i][j] != 'O') return;
  board[i][j] = '*';
  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
}