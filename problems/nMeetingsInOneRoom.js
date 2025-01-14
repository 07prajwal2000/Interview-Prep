function maxMeetings(start, end) {
  let meetings = [], n = start.length;
  for (let i = 0; i < n; i++) {
    meetings.push({
      s: start[i],
      e: end[i],
      p: i
    });
  }
  meetings.sort((a, b) => (a.e - b.e));
  let e = meetings[0].e;
  let count = 1;
  for (let i = 1; i < n; i++) {
    let cur = meetings[i];
    if (cur.s > e) {
      count++;
      e = meetings[i].e;
    }
  }
  return count;
}

console.log(maxMeetings([7, 18, 24], [30, 26, 28]));