/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let buy = 1e9;
	let maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		let price = prices[i];
		buy = Math.min(price, buy);
		if (price > buy) {
			maxProfit += price - buy;
			buy = price;
		}
	}
	return maxProfit;
};
