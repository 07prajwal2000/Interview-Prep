/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let row = 0, col = n - 1;
  while (row < m && col >= 0) {
    const mid = matrix[row][col];
    if (mid == target) return true;
    else if (mid > target) col--;
    else row++;
  }
  return false;
  for (let row = 0; row < m; row++) {
    let i = 0, j = n - 1;
    while (i <= j && target >= matrix[row][i] && target <= matrix[row][j]) {
      const mid = (i + j) >> 1;
      const midEle = matrix[row][mid];
      if (midEle == target) return true;
      else if (midEle > target) j = mid - 1;
      else if (midEle < target) i = mid + 1;
    }
  }
  return false;
};