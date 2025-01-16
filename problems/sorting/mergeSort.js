function mergeSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;
  const mid = n >> 1; // int division
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, n);
  left = mergeSort(left);
  right = mergeSort(right);
  let lp = 0, rp = 0, i = 0;
  const sortedArr = Array(n).fill(0);
  while (lp < left.length && rp < right.length) {
    let cur;
    if (left[lp] < right[rp]) {
      cur = left[lp];
      lp++;
    } else {
      cur = right[rp];
      rp++;
    }
    sortedArr[i] = cur;
    i++;
  }
  while (lp < left.length) {
    sortedArr[i] = left[lp];
    lp++;
    i++;
  }
  while (rp < right.length) {
    sortedArr[i] = right[rp];
    rp++;
    i++;
  }
  return sortedArr;
}

console.log(mergeSort([2, 1, 5, 4, 3, 6]));