function isPalindrome(s) {
	let l = 0,
		r = s.length - 1;
	while (l <= r) {
		if (s[l] != s[r]) return false;
		l++;
		r--;
	}
	return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const ans = [],
		temp = [];
	function backtrack(str) {
		if (str.length == 0) {
			ans.push([...temp]);
		}
		for (let i = 0; i < str.length; i++) {
			let ts = str.substring(0, i + 1);
			if (!isPalindrome(ts)) continue;
			temp.push(ts);
			backtrack(str.substring(i + 1));
			temp.pop();
		}
	}
	backtrack(s);
	return ans;
};


console.log(partition("aab"));