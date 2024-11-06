/**
 * @param {number[]} temps
 * @return {number[]}
 */
var dailyTemperatures = function (temps) {
  const n = temps.length;
  if (n == 1) return [0];
  const ans = [];
  const stack = [];
  for (let i = 1; i < n; i++) {
    let cur = temps[i];
    let prev = temps[i - 1];
    while (stack.length && temps[stack[stack.length - 1]] < cur) {
      let idx = stack.pop();
      ans[idx] = i - idx;
    }
    if (cur > prev) {
      ans.push(1);
    } else {
      ans.push(0);
      stack.push(i - 1);
    }
  }
  ans.push(0);
  return ans;
};

// for (let i = 0; i < n; i++) {
//     let ele = temps[i];
//     let j = i;
//     while (temps[j] <= ele && n > j) j++;
//     ans.push(j == n ? 0 : j - i);
// }
// return ans;

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));