/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let t = 0, b = matrix.length - 1;
  while (t <= b) {
    const mid = (t + b) >> 1;
    const arr = matrix[mid];
    const first = arr[0];
    const last = arr[arr.length - 1];
    if (target >= first && target <= last) return bSearch(arr, target);
    else if (target < first) b = mid - 1;
    else t = mid + 1;
  }
  return false;
};

function bSearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1
    const ele = arr[mid];
    if (ele == target) return true;
    else if (ele > target) r = mid - 1;
    else l = mid + 1;
  }
  return arr[l] == target;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));