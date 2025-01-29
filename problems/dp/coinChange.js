/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(0);

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

function sol2(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];
}

function sol2(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];
}

console.log(coinChange([186, 419, 83, 408], 6249));