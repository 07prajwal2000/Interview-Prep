/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  const pos = position.map((p, i) => ([p, (target - p) / speed[i]]));
  pos.sort((a, b) => a[0] - b[0]);
  let count = 0, prev = 0;
  for (let i = n - 1; i >= 0; i--) {
    const [p, time] = pos[i];
    if (prev < time) {
      prev = time;
      count++;
    }
  }
  return count;
};

var carFleet2 = function (target, position, speed) {
  const n = position.length;
  let pos = Array();
  for (let i = 0; i < n; i++) {
    pos[i] = [position[i], speed[i]];
  }
  pos.sort((a, b) => (a[0] - b[0]));
  pos = pos.reverse()
  const s = [];
  for (let [p, sp] of pos) {
    s.push((target - p) / sp)
    const l = s.length;
    if (l >= 2 && s[l - 1] <= s[l - 2]) {
      s.pop();
    }
  }
  return s.length;
};
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));