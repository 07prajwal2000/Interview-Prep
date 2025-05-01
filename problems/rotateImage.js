/**
 * @param {number[][]} arr
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (arr) {
  const n = arr.length;
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let t = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = t;
    }
  }
  // Reverse all elements
  for (let i = 0; i < n; i++) {
    reverse(arr[i]);
  }
};

var reverse = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    i++; j--;
  }
}