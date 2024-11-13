/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
	let result = [],
		temp = [];
	function calcSum(i, curSum) {
		if (curSum == target) {
			result.push([...temp]);
			return;
		}
		if (curSum > target || i == nums.length) return;
		calcSum(i + 1, curSum);
		temp.push(nums[i]);
		calcSum(i, curSum + nums[i]);
		temp.pop();
	}
	calcSum(0, 0);
	return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
