/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const n = nums.length;
  if (n <= 1) return 0;
  let count = 0;
  function merge(arr) {
    const n = arr.length;
    if (n <= 1) return arr;
    const mid = parseInt(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    left = merge(left);
    right = merge(right);
    let lp = 0, rp = 0, i = 0;
    const sortedArr = Array(n).fill(0);
    while (lp < left.length && rp < right.length) {
      let cur;
      if (left[lp] <= right[rp]) {
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

    // count the pairs
    let r = 0;
    for (let l = 0; l < left.length; l++) {
      while (r < right.length && left[l] > 2 * right[r]) {
        r++;
      }
      count += r;
    }
    return sortedArr;
  }
  merge(nums);
  return count;
};

console.log(reversePairs([2,4,3,5,1]));