function knapSack1(val, wt, capacity) {
	const n = val.length;
	const dp = Array(n);

	for (let i = 0; i < n; i++) dp[i] = Array(capacity + 1).fill(0);

	for (let i = 0; i <= capacity; i++) {
		dp[0][i] = parseInt(i / wt[0]) * val[0];
	}

	for (let i = 1; i < n; i++) {
		for (let cap = 0; cap <= capacity; cap++) {
			let notTake = dp[i - 1][cap];
			let take = -1;
			if (wt[i] <= cap) take = val[i] + dp[i][cap - wt[i]];
			dp[i][cap] = Math.max(notTake, take);
		}
	}

	return dp[n - 1][capacity];

	function find(i, cap) {
		if (i == n) return -1;
		if (i < 0) return 0;
		if (dp[i][cap] != -1) return dp[i][cap];
		let notTake = find(i - 1, cap);
		let take = -1;
		if (capacity >= cap + wt[i]) take = val[i] + find(i, cap + wt[i]);
		return (dp[i][cap] = Math.max(notTake, take));
	}

	return find(n - 1, 0, 0);
}

function knapSack(val, wt, capacity) {
	const n = val.length;
	const dp = Array(n + 1)
		.fill(0)
		.map(() => Array(capacity + 1).fill(0));

	for (let i = 1; i <= n; i++) {
		for (let cap = 0; cap <= capacity; cap++) {
			let notTake = dp[i - 1][cap];
			let take = 0;
			if (wt[i - 1] <= cap) {
				take = val[i - 1] + dp[i][cap - wt[i - 1]];
			}
			dp[i][cap] = Math.max(notTake, take);
		}
	}

	return dp[n][capacity];
}

console.log(knapSack([9, 10, 3, 3, 7, 4, 7], [2, 3, 7, 4, 9, 1, 6], 3)); // 13
