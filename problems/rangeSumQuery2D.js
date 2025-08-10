/**
 * @param {number[][]} nums
 */
var NumMatrix = function (nums) {
  const n = nums.length, m = nums[0].length
  const matrix = Array.from({ length: n }).map(() => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const top = i - 1 >= 0 ? matrix[i - 1][j] : 0;
      const left = j - 1 >= 0 ? matrix[i][j - 1] : 0;
      const topLeft = i - 1 >= 0 && j - 1 >= 0 ? matrix[i - 1][j - 1] : 0;
      matrix[i][j] = top + left + nums[i][j] - topLeft
    }
  }
  this.matrix = matrix;
  this.nums = nums;
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const mat = this.matrix;
  const nums = this.nums;
  const bottomLeft = col1 - 1 >= 0 ? mat[row2][col1 - 1] : 0;
  const topRight = row1 - 1 >= 0 ? mat[row1 - 1][col2] : 0;
  const topLeft = row1 - 1 >= 0 && col1 - 1 >= 0 ? mat[row1 - 1][col1 - 1] : 0;
  return mat[row2][col2] - topRight - bottomLeft + topLeft;
};