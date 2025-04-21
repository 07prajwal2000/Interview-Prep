function quickSortUsingSpace(arr) {
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
  left = quickSortUsingSpace(left);
  right = quickSortUsingSpace(right);
  return [...left, pivot, ...right];
}

function quickSort(arr) {
  const n = arr.length;
  function sort(low, high) {
    if (low >= high) return;
    let pivot = arr[low];
    let i = low, j = high;
    while (i < j) {
      while (i <= high - 1 && arr[i] <= pivot) i++;
      while (j >= low - 1 && arr[j] > pivot) j--;

      if (j > i) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
    let tmp = arr[low];
    arr[low] = arr[j];
    arr[j] = tmp;
    sort(low, j - 1);
    sort(j + 1, high);
  }
  sort(0, n - 1);
  return arr;
}

console.log(quickSort([6, 2, 4, 3, 2, 1]));