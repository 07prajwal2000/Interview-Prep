/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let buy = 1e9;
	let maxProfit = 0;
	for (let price of prices) {
		buy = Math.min(price, buy);
		if (price > buy) {
			maxProfit = Math.max(maxProfit, price - buy);
		}
	}
	return maxProfit;
};
