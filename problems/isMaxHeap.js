function isMaxHeap(n, arr) {
  function check(idx) {
    if (idx >= n) return true;

    let leftIdx = (idx * 2) + 1;
    let rightIdx = (idx * 2) + 2;
    if (leftIdx < n && (arr[leftIdx] > arr[idx] || !check(leftIdx))) return false;
    if (rightIdx < n && (arr[rightIdx] > arr[idx] || !check(rightIdx))) return false;
    return true;
  }
  return check(0);
}