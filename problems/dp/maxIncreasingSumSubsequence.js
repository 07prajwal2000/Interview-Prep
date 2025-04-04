function maxSumIS(nums) {
  const n = nums.length;
  if (n == 1) return nums[0];
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(-1));

  function find(i, prevIdx) {
    if (i < 0) return 0;
    if (prevIdx != -1 && dp[i][prevIdx] != -1) return dp[i][prevIdx];
    let notTake = find(i - 1, prevIdx);
    let take = 0;
    if (prevIdx == -1 || nums[prevIdx] > nums[i]) take = find(i - 1, i) + nums[i];
    return (dp[i][prevIdx] = Math.max(notTake, take));
  }
  return find(n - 1, -1);
}