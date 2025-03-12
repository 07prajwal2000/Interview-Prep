/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  if (amount == 0) return 1;
  const n = coins.length;
  const dp = Array(n);

  for (let i = 0; i < n; i++) dp[i] = Array(amount + 1).fill(0);

  for (let i = 0; i <= amount; i++) {
    dp[0][i] = i % coins[0] == 0 ? 1 : 0;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= amount; j++) {
      let notTake = dp[i - 1][j];
      let take = 0;
      if (coins[i] <= j) take = dp[i][j - coins[i]];
      dp[i][j] = take + notTake;
    }
  }
  return dp[n - 1][amount];

  // memo
  function find(i, amt) {
    if (i < 0) return 0;
    if (i == 0) return dp[i][amt] = (amt % coins[i]) ? 0 : 1;
    if (dp[i][amt] != -1) return dp[i][amt];
    if (amt == 0) {
      return dp[i][amt] = 1;
    }
    let notTake = find(i - 1, amt);
    let take = 0;
    if (coins[i] <= amt) take = find(i, amt - coins[i]);
    dp[i][amt] = take + notTake
    return take + notTake;
  }
  return find(n - 1, amount);
};

console.log(change(500, [2, 7, 13]));