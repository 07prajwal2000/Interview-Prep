/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const cur = board[i][j];
      if (set.has(cur)) return false;
      if (cur != ".") {
        set.add(cur);
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const cur = board[j][i];
      if (set.has(cur)) return false;
      if (cur != ".") {
        set.add(cur);
      }
    }
  }

  const pos = [
    [0, 0], [0, 3], [0, 6],
    [3, 0], [3, 3], [3, 6],
    [6, 0], [6, 3], [6, 6]
  ];

  for (let p of pos) {
    let [i, j] = p;
    const set = new Set();
    for (let x = i; x < i + 3; x++) {
      for (let y = j; y < j + 3; y++) {
        const cur = board[x][y];
        if (set.has(cur)) return false;
        if (cur != ".") {
          set.add(cur);
        }
      }
    }
  }

  return true;
};

console.log(isValidSudoku([
  [".", ".", ".", ".", "5", ".", ".", "1", "."], 
  [".", "4", ".", "3", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", "3", ".", ".", "1"], 
  ["8", ".", ".", ".", ".", ".", ".", "2", "."], 
  [".", ".", "2", ".", "7", ".", ".", ".", "."], 
  [".", "1", "5", ".", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", "2", ".", ".", "."], 
  [".", "2", ".", "9", ".", ".", ".", ".", "."], 
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
]));