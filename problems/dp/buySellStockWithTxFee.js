/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(2).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let bs = 0; bs < 2; bs++) {
      if (bs == 0) {
        let notBuy = dp[i + 1][0];
        let buy = dp[i + 1][1] - prices[i];
        dp[i][bs] = Math.max(notBuy, buy);
        continue;
      }
      let notSell = dp[i + 1][1];
      let sell = dp[i + 1][0] + prices[i] - fee;
      dp[i][bs] = Math.max(notSell, sell);
    }
  }
  return dp[0][0];
  function find(i, bs) {
    if (i == n) return 0;
    if (dp[i][bs] != -1e9) return dp[i][bs];
    if (bs == 0) {
      let notBuy = find(i + 1, bs);
      let buy = find(i + 1, 1) - prices[i];
      return (dp[i][bs] = Math.max(notBuy, buy));
    }
    let notSell = find(i + 1, bs);
    let sell = find(i + 1, 0) + prices[i] - fee;
    return (dp[i][bs] = Math.max(notSell, sell));
  }
  return find(0, 0);
};
