/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
	if (s == t) return 1;
	const sn = s.length,
		tn = t.length;

	const dp = Array(sn + 1)
		.fill(0)
		.map(() => Array(tn + 1).fill(0));
	for (let i = 0; i <= sn; i++) {
		dp[i][0] = 1;
	}

	// tabulation
	for (let si = 1; si <= sn; si++) {
		for (let ti = 1; ti <= tn; ti++) {
			if (s[si - 1] == t[ti - 1])
				dp[si][ti] = dp[si - 1][ti - 1] + dp[si - 1][ti];
			else dp[si][ti] = dp[si - 1][ti];
		}
	}
	return dp[sn][tn];

	// memoization
	function find(si, ti) {
		if (si == sn && ti == tn) {
			return 1;
		}
		if (ti == tn) return 1;
		if (si == sn || ti == tn) return 0;
		if (dp[si][ti] != -1) return dp[si][ti];
		if (s[si] == t[ti])
			return (dp[si][ti] = find(si + 1, ti + 1) + find(si + 1, ti));
		return (dp[si][ti] = find(si + 1, ti));
	}
	return find(0, 0);
};