function isSubsetSum(arr, target) {
  const n = arr.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(target + 1);
    dp[i][0] = true;
  }
  dp[0][arr[0]] = true;
  for (let i = 1; i < n; i++) {
    for (let t = 1; t <= target; t++) {
      let notTake = dp[i - 1][t];
      let take = false;
      if (t >= arr[i]) take = dp[i - 1][t - arr[i]];
      dp[i][t] = take || notTake;
    }
  }
  return dp[n - 1][target] == true;
}

function isSubSetSumMemo(arr, target) {
  const n = arr.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(4 * (10 ** 4)).fill(-1);
  }
  function find(i, t) {
    if (dp[i][t] != -1) return dp[i][t] == 1;
    if (i == 0) return arr[0] == t;
    if (t == 0) return true;
    let notTake = find(i - 1, t);
    let take = false;
    if (t >= arr[i]) take = find(i - 1, t - arr[i]);
    dp[i][t] = (take || notTake) ? 1 : 0;
    return (take || notTake);
  }
  return find(n - 1, target);
}