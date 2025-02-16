function subsetSums(arr) {
  let ans = [], n = arr.length;

  function find(idx, sum) {
    if (idx == n) {
      ans.push(sum);
      return;
    }
    find(idx + 1, sum + arr[idx]);
    find(idx + 1, sum);
  }
  find(0, 0);
  return ans;
}