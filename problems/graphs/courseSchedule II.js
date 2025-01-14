/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (n, courses) {
  const map = {}, ans = []; // adj list
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let [a, b] of courses) {
    map[a].push(b);
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
    ans.push(node);
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (!check(i)) return [];
  }

  return ans;
};