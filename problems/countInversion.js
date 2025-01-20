function inversionCount(a) {
	let count = 0;
	function mergeSort(arr) {
		const n = arr.length;
		if (n <= 1) return arr;
		const mid = parseInt(n / 2); 
		let left = arr.slice(0, mid);
		let right = arr.slice(mid, n);
		left = mergeSort(left);
		right = mergeSort(right);
		let lp = 0, rp = 0, i = 0;
		const sortedArr = Array(n).fill(0);
		while (lp < left.length && rp < right.length) {
			let cur;
			if (left[lp] <= right[rp]) {
				cur = left[lp];
				lp++;
			} else {
				cur = right[rp];
				count += (mid - lp + 1);
				rp++;
			}
			sortedArr[i] = cur;
			i++;
		}
		while (lp < left.length) {
			sortedArr[i] = left[lp];
			lp++;
			i++;
		}
		while (rp < right.length) {
			sortedArr[i] = right[rp];
			rp++;
			i++;
		}
		return sortedArr;
	}
	mergeSort(a);
	return count;
}

console.log(inversionCount([2, 4, 1, 3, 5]));