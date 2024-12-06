function findPlatform(arr, dep) {
  arr.sort((a, b) => (a - b));
  dep.sort((a, b) => (a - b));
  let i = 0, j = 0, n = arr.length;
  let maxCount = 0, count = 0;
  while (i < n) {
    if (arr[i] <= dep[j]) {
      count++;
      i++;
    } else {
      count--;
      j++;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

console.log(findPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]));