/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	const n1 = word1.length,
		n2 = word2.length;
	const dp = Array(n1 + 1)
		.fill(0)
		.map(() => Array(n2 + 1).fill(0));
	if (n1 == 0) return n2;
	if (n2 == 0) return n1;

	for (let i = 0; i <= n1; i++) dp[i][0] = i;
	for (let i = 0; i <= n2; i++) dp[0][i] = i;

	for (let i = 1; i <= n1; i++) {
		for (let j = 1; j <= n2; j++) {
			if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
			else {
				let insert = dp[i][j - 1];
				let replace = dp[i - 1][j - 1];
				let del = dp[i - 1][j];

				dp[i][j] = Math.min(insert, replace, del) + 1;
			}
		}
	}

	return dp[n1][n2];

	function find(i, j) {
		if (i < 0 && j < 0) return 0;
		if (i < 0) return j + 1;
		if (j < 0) return i + 1;
		if (dp[i][j] != -1) return dp[i][j];
		if (word1[i] == word2[j]) return (dp[i][j] = find(i - 1, j - 1));

		let insert = find(i, j - 1) + 1;
		let replace = find(i - 1, j - 1) + 1;
		let del = find(i - 1, j) + 1;

		return (dp[i][j] = Math.min(insert, replace, del));
	}

	return find(n1 - 1, n2 - 1);
};
