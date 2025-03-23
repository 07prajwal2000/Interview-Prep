/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	const n = prices.length;
	const dp = Array(n + 1) // n for memo
		.fill(0)
		.map(() =>
			Array(2)
				.fill(0)
				.map(
					() => Array(k + 1).fill(0) // -1 for memo
				)
		);

	// tabulation
	for (let i = n - 1; i >= 0; i--) {
		for (let buy = 0; buy < 2; buy++) {
			for (let cap = 1; cap <= k; cap++) {
				if (buy) {
					let take = dp[i + 1][0][cap] - prices[i];
					let notTake = dp[i + 1][1][cap];
					dp[i][buy][cap] = Math.max(take, notTake);
				} else {
					let take = dp[i + 1][1][cap - 1] + prices[i];
					let notTake = dp[i + 1][0][cap];
					dp[i][buy][cap] = Math.max(take, notTake);
				}
			}
		}
	}
	return dp[0][1][k];

	// memo
	function find(i, buy, cap) {
		if (i == n || cap == 0) return 0;
		if (dp[i][buy][cap] != -1) return dp[i][buy][cap];
		if (buy) {
			let take = find(i + 1, 0, cap) - prices[i];
			let notTake = find(i + 1, 1, cap);
			return (dp[i][buy][cap] = Math.max(take, notTake));
		}
		let take = prices[i] + find(i + 1, 1, cap - 1);
		let notTake = find(i + 1, 0, cap);
		return (dp[i][buy][cap] = Math.max(take, notTake));
	}

	return find(0, 1, k);
};
