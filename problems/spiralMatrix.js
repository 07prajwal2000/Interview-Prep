/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (arr) {
  const n = arr.length,
    m = arr[0].length;
  const maxLen = n * m;
  const res = [];
  const visited = Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = Array(arr[0].length).fill(0);
  }

  for (let i = 0; i < n; i++) {
    // left -> right
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue;

      visited[i][j] = 1;
      res.push(arr[i][j]);
    }
    // top -> bottom
    for (let j = 0; j < n; j++) {
      if (visited[j][m - i - 1]) continue;

      visited[j][m - i - 1] = 1;
      res.push(arr[j][m - i - 1]);
    }
    // right -> left
    for (let j = m - i - 1; j >= 0; j--) {
      if (visited[n - i - 1][j]) continue;

      visited[n - i - 1][j] = 1;
      res.push(arr[n - i - 1][j]);
    }
    // bottom -> top
    for (let j = n - i - 1; j >= 0; j--) {
      if (visited[j][i]) continue;

      visited[j][i] = 1;
      res.push(arr[j][i]);
    }
    if (res.length == maxLen) break;
  }
  return res;
};
console.log(spiralOrder([
  [1, 2, 3],//, 10], 
  [4, 5, 6],//, 11], 
  [7, 8, 9],//, 12]
]));
