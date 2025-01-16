function quickSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;
  const pivot = arr[n - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < n - 1; i++) {
    let ele = arr[i];
    if (pivot <= ele) {
      right.push(ele);
    } else {
      left.push(ele);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, pivot, ...right];
}

console.log(quickSort([6, 5, 4, 3, 2, 1]));