/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (tri) {
  const dp = Array(tri.length);
  for (let i = 0; i < tri.length; i++) {
    dp[i] = Array(i + 1).fill(1e9);
  }
  dp[0][0] = tri[0][0];
  function find(level, i) {
    if (i < 0 || tri[level].length == i) return 1e9;
    if (dp[level][i] != 1e9) return dp[level][i];
    if (level == 0) return tri[0][0];
    return dp[level][i] = Math.min(find(level - 1, i) + tri[level][i], find(level - 1, i - 1) + (i - 1 < 0 ? 1e9 : tri[level][i]));
  }
  let ans = 1e9;
  for (let i = 0; i < tri[tri.length - 1].length; i++) {
    ans = Math.min(ans, find(tri.length - 1, i));
  }
  return ans;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 2, 8, 3]]));