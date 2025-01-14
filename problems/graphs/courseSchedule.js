/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (n, courses) {
  const map = {}; // adj list
  for (let c of courses) {
    let [a, b] = c;
    if (a in map) map[a].push(b);
    else map[a] = [b];
  }

  const visited = Array(n).fill(0); // 0 -> not, 1 -> in-progress, 2 -> done
  function check(node) {
    if (visited[node] == 1) return false;
    if (visited[node] == 2) return true;
    if (!(node in map)) return true;

    visited[node] = 1;
    for (let e of map[node]) {
      if (!check(e)) return false;
    }
    visited[node] = 2;
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (!check(i)) return false;
  }

  return true;
};