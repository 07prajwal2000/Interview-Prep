class Solution {
  canAttendMeetings(intervals) {
    intervals = intervals.sort((a, b) => (a.start - b.start));
    let prev = -1e9;
    for (let interval of intervals) {
      if (prev > interval.start) return false;
      prev = interval.end;
    }
    return true;
  }
}