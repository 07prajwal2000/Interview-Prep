/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	const sn = s.length,
		pn = p.length;
	const dp = Array(sn)
		.fill(0)
		.map(() => Array(pn).fill(undefined));

	function check(si, pi) {
		if (si > sn || pi > pn) return false;
		if (si < sn && pi < pn && dp[si][pi] != undefined) return dp[si][pi];
		if (si == sn && pi == pn) return true;
		if (s[si] != p[pi] && p[pi] != "?" && p[pi] != "*") return false;
		if (si == sn && pi < pn && p[pi] == "*") return check(si, pi + 1);
		if (p[pi] != "*") return check(si + 1, pi + 1);
		return (dp[si][pi] =
			check(si + 1, pi) || check(si + 1, pi + 1) || check(si, pi + 1));
	}

	return check(0, 0);
};

console.log(isMatch("ramaanbv", "ram*nbv"));