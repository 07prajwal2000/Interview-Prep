/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	const n = nums.length;
	if (n == 1) return 1;
	const arr = [];

	for (let i = 0; i < n; i++) {
		const cur = nums[i];
		if (arr.length == 0) arr.push(cur);
		else {
			const idx = binarySearch(arr, cur);
			if (idx == arr.length) arr.push(cur);
			else arr[idx] = cur;
		}
	}

	return arr.length;
};

function binarySearch(arr, ele) {
	let l = 0,
		r = arr.length;
	while (l <= r) {
		const mid = (l + r) >> 1;
		if (ele > arr[mid]) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return l;
}

var lengthOfLIS_DP = function (nums) {
	const n = nums.length;
	if (n == 1) return 1;
	const dp = Array(n)
		.fill(0)
		.map(() => Array(n).fill(-1));

	function find(i, prevIdx) {
		if (i < 0) return 0;
		if (prevIdx != -1 && dp[i][prevIdx] != -1) return dp[i][prevIdx];
		let notTake = find(i - 1, prevIdx);
		let take = 0;
		if (prevIdx == -1 || nums[prevIdx] > nums[i]) take = find(i - 1, i) + 1;
		return (dp[i][prevIdx] = Math.max(notTake, take));
	}
	return find(n - 1, -1);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
