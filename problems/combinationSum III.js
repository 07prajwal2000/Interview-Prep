/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [], temp = [];
  function find(idx, sum) {
    if (temp.length == k && sum == n) {
      ans.push([...temp]);
      return;
    }
    if (temp.length == k || sum > n) return;

    for (let i = idx; i <= 9; i++) {
      temp.push(i);
      find(i + 1, sum + i);
      temp.pop();
    }
  }
  find(1, 0);
  return ans;
};