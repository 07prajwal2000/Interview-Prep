/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (p) {
  let profit = 0;
  let tempBuy = Infinity;
  for (let i = 0; i < p.length; i++) {
    tempBuy = Math.min(p[i], tempBuy);
    if (tempBuy < p[i]) {
      profit = Math.max(profit, p[i] - tempBuy);
    }
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));