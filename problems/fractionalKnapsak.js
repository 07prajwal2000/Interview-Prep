class Solution {
  fractionalknapsack(val, wt, capacity) {
    const items = val.map((x, i) => ([x, wt[i]]));
    items.sort((a, b) => {
      let divA = a[0] / a[1];
      let divB = b[0] / b[1];
      if (divA < divB) return 1;
      else return -1;
    });
    let ans = 0;
    for (let item of items) {
      let [value, weight] = item;
      if (capacity == 0) break;
      if (capacity >= weight) {
        ans += value;
        capacity -= weight;
      } else {
        ans += ((value / weight) * capacity);
        break;
      }
    }
    return ans;
  }
}