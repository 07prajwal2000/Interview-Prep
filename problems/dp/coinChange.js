/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount == 0) return 0;
  const dp = Array(amount + 1).fill(1e9);
  dp[0] = 0;
  for (let amt = 1; amt <= amount; amt++) {
    for (let coin of coins) {
      const change = amt - coin;
      if (change < 0) continue;
      dp[amt] = Math.min(dp[change] + 1, dp[amt]);
    }
  }
  return dp[amount] == 1e9 ? -1 : dp[amount];
  function solve(amt) {
    if (amt == 0) return 0;
    if (dp[amt]) return dp[amt];

    let ans = 1e9;
    for (let c of coins) {
      const change = amt - c;
      if (change > 0) {
        ans = Math.min(solve(change) + 1, ans);
      }
    }
    dp[amt] = ans;
    return ans;
  }

  let ans = solve(amount);
  return ans == 1e9 ? -1 : ans;
};