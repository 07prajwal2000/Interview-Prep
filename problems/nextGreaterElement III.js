/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  if (n < 10) return -1;
  let tempN = n, arr = [], i = -1, j = -1;
  while (tempN) {
    arr.push(tempN % 10);
    tempN = Math.floor(tempN / 10);
  }
  arr = arr.reverse();
  for (i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }
  
  if (i == -1) return -1;
  for (j = arr.length - 1; j > i; j--) {
    if (arr[j] > arr[i]) break;
  }
  
  // swap
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;

  let l = i + 1, r = arr.length - 1;
  while (l <= r) {
    tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
    l++;
    r--;
  }
  const ans = parseInt(arr.join(""));
  return ans >= 2**31 ? -1 : ans;
};

let input = 12431;
let ans = nextGreaterElement(input);
console.log(ans, ans > input);