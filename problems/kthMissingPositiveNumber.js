/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	const n = arr.length;
	let l = 0,
		r = n;
	while (l < r) {
		const mid = (l + r) >> 1;
		const midEle = arr[mid];
		if (midEle - mid - 1 < k) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return r + k;
};

console.log(findKthPositive([1, 100], 2));
