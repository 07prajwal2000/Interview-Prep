function cutRod(price) {
  const n = price.length;
  const dp = Array(n);

  for (let i = 0; i < n; i++) dp[i] = Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[0][i] = price[0] * i;
  }

  for (let i = 1; i < n; i++) {
    for (let len = 0; len <= n; len++) {
      let notTake = dp[i - 1][len];
      let take = -1e9;
      const rodLength = i + 1;
      if (rodLength <= len) take = price[i] + dp[i][len - rodLength];
      dp[i][len] = Math.max(notTake, take);
    }
  }
  return dp[n - 1][n];

  function find(i, len) {
    if (i < 0 || len < 0) return 0;
    if (i == 0) return len * price[0];
    if (dp[i][len] != -1) dp[i][len];
    let notTake = find(i - 1, len);
    let take = -1e9;
    const rodLength = i + 1;
    if (rodLength <= len) take = price[i] + find(i, len - rodLength);
    return dp[i][len] = Math.max(notTake, take);
  }
  return find(n - 1, n);
}