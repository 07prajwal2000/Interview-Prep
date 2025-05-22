/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const arr = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i + 1] + 1, arr[i]);
    }
  }
  return arr.reduce((sum, val) => (sum += val));
};

console.log(candy([1,0,2]));