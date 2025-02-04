/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  const m = mat.length, n = mat[0].length;
  let i = 0, j = n;

  while (i <= j) {
    const mid = (i + j) >> 1;
    let maxK = 0;
    for (let k = 0; k < m; k++) {
      if (mat[k][mid] > mat[maxK][mid]) {
        maxK = k;
      }
    }
    let left = mat[maxK][mid - 1] || -1;
    let right = mat[maxK][mid + 1] || -1;
    let val = mat[maxK][mid];
    if (val > left && val > right) {
      return [maxK, mid];
    } else if (left > val) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
};