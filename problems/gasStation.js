/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let totalGas = 0, curGas = 0, totalCost = 0, index = 0;
  for (let i = 0; i < n; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    curGas += gas[i] - cost[i];
    if (curGas < 0) {
      index = i + 1;
      curGas = 0;
    }
  }
  if (totalCost > totalGas) return -1;
  return index;
};

console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));