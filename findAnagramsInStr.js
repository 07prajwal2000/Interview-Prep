/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s2, s1) {
	const map = {};
	const map2 = {};
	for (let i = 0; i < s1.length; i++) {
		map[s1[i]] = (map[s1[i]] || 0) + 1;
		map2[s2[i]] = (map2[s2[i]] || 0) + 1;
	}
	let left = 0;
	const ans = [];
	for (let i = s1.length; i < s2.length; i++) {
		if (equals(map, map2)) {
			ans.push(left);
		}
		const char = s2[i];
		const old = s2[left];
		map2[char] = (map2[char] || 0) + 1;
		map2[old]--;
		if (map2[old] <= 0) delete map2[old];
		left++;
	}
	if (equals(map, map2)) ans.push(left);
	return ans;
};

function equals(m1, m2) {
	for (let k in m1) {
		if (m1[k] != m2[k]) return false;
	}
	return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));