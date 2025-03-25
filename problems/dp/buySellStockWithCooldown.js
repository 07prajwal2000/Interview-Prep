/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	const n = prices.length;
	const dp = Array(n + 2)
		.fill(0)
		.map(() => Array(2).fill(0));
	for (let i = n - 1; i >= 0; i--) {
		dp[i][1] = Math.max(dp[i + 1][0] - prices[i], dp[i + 1][1]);
		dp[i][0] = Math.max(dp[i + 2][1] + prices[i], dp[i + 1][0]);
	}
	return dp[0][1];
	const dp1 = Array(n)
		.fill(0)
		.map(
			() =>
				Array(3)
					.fill(0)
					.map(() => Array(2).fill(-1)) // -1 for
		);

	function find(i, buy, cooldown) {
		if (i == n) return 0;
		if (dp[i][buy][cooldown] != -1) return dp[i][buy][cooldown];
		if (cooldown) {
			return (dp[i][buy][cooldown] = find(i + 1, buy, 0));
		}
		if (buy == 1) {
			let take = find(i + 1, 2, 0) - prices[i];
			let notTake = find(i + 1, 1, 0);
			return (dp[i][buy][cooldown] = Math.max(take, notTake));
		}
		let take = find(i + 1, 1, 1) + prices[i];
		let notTake = find(i + 1, 0, 0);
		return (dp[i][buy][cooldown] = Math.max(take, notTake));
	}
	return find(0, 1, 0);
};
