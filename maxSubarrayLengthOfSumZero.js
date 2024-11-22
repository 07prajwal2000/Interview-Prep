function maxLen(arr) {
  const map = {};
  let totalSum = 0, i = 0;
  let len = 0;
  for (let num of arr) {
    totalSum += num;
    i++;
    if (totalSum == 0) {
      len = Math.max(i, len);
    }
    if (totalSum in map) {
      len = Math.max(len, i - map[totalSum]);
    }
    !(totalSum in map) && (map[totalSum] = i);
  }
  return len;
}

console.log(maxLen([1, 0, -4, 3, 1, 0]));