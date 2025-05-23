/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const ans = [], heap = new MaxPriorityQueue(x => x[0]), map = {};
  for (let c of s) {
    if (c in map) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }
  for (let k in map) heap.push([map[k], k]);
  let prevFreq = 0, prevC = '';
  while (heap.size()) {
    const [freq, c] = heap.pop();
    if (prevFreq > 0) heap.push([prevFreq, prevC]);
    ans.push(c);
    prevFreq = freq - 1;
    prevC = c;
  }
  console.log(ans);
  if (ans.length != s.length) return "";
  return ans.join("");
};