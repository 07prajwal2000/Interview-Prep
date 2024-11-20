/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	if (n == 3 || n == 2) return []
	if (n == 1) return [["Q"]];
	const res = [];

	const board = [];
	for (let i = 0; i < n; i++) {
		const arr = Array(n);
		arr.fill(".");
		board.push(arr);
	}

	function solve(row) {
		if (row == n) {
			const temp = [];
			for (let r of board) {
				temp.push(r.join(""));
			}
			res.push(temp);
			return;
		}
		for (let i = 0; i < n; i++) {
			if (isSafe(board, row, i)) {
				board[row][i] = "Q";
				solve(row + 1);
				board[row][i] = ".";
			}
		}
	}

	solve(0);
	return res;
};

function isSafe(board, row, col) {
	const n = board.length;
	for (let i = 0; i < row; i++) {
		if (board[i][col] == "Q") return false;
	}
	for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
		if (board[i][j] == "Q") return false;
	}
	for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
		if (board[i][j] == "Q") return false;
	}
	return true;
}

console.log(solveNQueens(9));