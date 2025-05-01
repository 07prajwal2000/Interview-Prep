/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let end = -1e9, count = 0;
  for (let [s, e] of intervals) {
    if (end > s) {
      count++;
    } else {
      end = e;
    }
  }
  return count;
};