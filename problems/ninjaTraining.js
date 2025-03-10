function maximumPoints(arr) {
  const n = arr.length;
  const memo = Array(n);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(4).fill(-1);
  }
  function find(i, done) {
    if (i == 0) {
      let max = 0;
      for (let j = 0; j < 3; j++) {
        if (j == done) continue;
        max = Math.max(max, arr[0][j]);
      }
      return memo[i][done] = max;
    }
    if (memo[i][done] != -1) return memo[i][done];
    let max = 0;
    for (let j = 0; j < 3; j++) {
      if (done == j) continue;
      const point = arr[i][j] + find(i - 1, j);
      max = Math.max(point, max);
    }
    return memo[i][done] = max;
  }
  return find(n - 1, 3);
}

console.log(maximumPoints([
  [8, 7, 3],
  [10, 6, 3],
  [1, 1, 4],
  [10, 2, 9],
  [2, 10, 6],
  [4, 3, 6],
  [3, 6, 9],
  [7, 8, 8],
  [3, 3, 10],
  [5, 2, 10],
]
));