/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const ans = [],
		temp = [];

	function backtrack(i) {
		if (i == nums.length) {
			ans.push([...temp]);
			return;
		}
		temp.push(nums[i]);
		backtrack(i + 1);
		temp.pop();
		backtrack(i + 1);
	}
	backtrack(0);
	return ans;
};
