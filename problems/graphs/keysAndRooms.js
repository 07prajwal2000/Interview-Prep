/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = Array(n).fill(0);
  function dfs(room) {
    if (visited[room]) return;
    visited[room] = 1;
    for (let nei of rooms[room]) {
      if (nei == room) continue;
      dfs(nei);
    }
  }
  dfs(0);
  for (let room of visited) {
    if (!room) return false;
  }
  return true;
};