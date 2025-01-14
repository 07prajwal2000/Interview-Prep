function longestSubarray(arr, k) {
  const map = {};
  let count = 0, curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const key = curSum - k;
    if (curSum == k) count = i + 1;
    if (key in map) count = Math.max(count, i - map[key]);
    if (!(curSum in map)) map[curSum] = i;
  }
  return count;
}

function longestBinarySubarrayWithSumZero(arr) {
  const map = {};
  const k = 0;
  let count = 0, curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i] == 0 ? -1 : 1;
    curSum += cur;
    const key = curSum - k;
    if (curSum == k) count = i + 1;
    if (key in map) count = Math.max(count, i - map[key]);
    if (!(curSum in map)) map[curSum] = i;
  }
  return count;
}

console.log(longestBinarySubarrayWithSumZero([0, 1, 0, 1]));