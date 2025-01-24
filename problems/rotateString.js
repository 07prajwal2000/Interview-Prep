/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let i = 0, j = 0, n = s.length;
  if (s.length != goal.length) return false;
  function check(j) {
    for (let i = 0; i < n; i++) {
      let ti = (i + j) % n;
      if (s[i] != goal[ti]) return false;
    }
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (check(i)) return true;
  }
  return false;
};


console.log(rotateString("defdefdefabcabc", "defdefabcabcdef"));