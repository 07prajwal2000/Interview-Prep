/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	const n = s.length;
	let len = 0;
	for (let i = 0; i < n; i++) {
		let len1 = palindromeCount(s, i, i + 1);
		let len2 = palindromeCount(s, i - 1, i + 1);
		len += len1 + len2 + 1;
	}
	return len;
};

function palindromeCount(s, l, r) {
	let len = 0;
	while (l >= 0 && r < s.length) {
		if (s[l] != s[r]) return len;
		l--;
		r++;
		len++;
	}
	return len;
}
