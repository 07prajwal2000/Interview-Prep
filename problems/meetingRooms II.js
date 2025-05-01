/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const n = intervals.length;
    if (n == 0) return 0;
    const start = intervals.map(x => x.start).sort((a, b) => a - b);
    const end = intervals.map(x => x.end).sort((a, b) => a - b);
    let i = 0, j = 0, count = 0, maxCount = 0;
    console.log(start);
    console.log(end);
    while (i < n && j < n) {
      if (start[i] == end[j]) {
        j++;
        count--;
      } else if (start[i] < end[j]) {
        count++;
        i++;
      } else {
        count--;
        j++;
      }
      maxCount = Math.max(maxCount, count);
    }
    return maxCount;
  }
}
