/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let result = false;
	function search(idx, i, j) {
		if (i >= board.length || i < 0 || j >= board[0].length || j < 0) return;
		if (board[i][j] != word[idx]) return;
		if (board[i][j] == '#') return;
		if (result) return;
		idx++;
		if (idx == word.length) {
			result = true;
			return;
		}
		let t = board[i][j];
		board[i][j] = '#';
		search(idx, i - 1, j); // up
		search(idx, i + 1, j); // bottom
		search(idx, i, j - 1); // left
		search(idx, i, j + 1); // left
		board[i][j] = t;
	}
	for (let i = 0; i < board.length && !result; i++)
		for (let j = 0; j < board[0].length && !result; j++)
			search(0, i, j, 0);
	return result;
};

console.log(exist([["A"]], "B"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ESE"));