/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (eq, val, queries) {
  const map = {};
  for (let i = 0; i < eq.length; i++) {
    const [var1, var2] = eq[i];
    if (var1 in map) {
      map[var1][var2] = val[i];
    } else {
      map[var1] = {
        [var2]: val[i]
      };
    }
    if (var2 in map) {
      map[var2][var1] = 1 / val[i];
    } else {
      map[var2] = {
        [var1]: 1 / val[i]
      };
    }
  }
  const ans = [];
  for (let query of queries) {
    const [v1, v2] = query;
    if (!(v1 in map) || !(v2 in map)) ans.push(-1);
    else if (v1 in map && !(v2 in map[v1])) {
      ans.push(getAns(map, v1, v2, new Set()));
    }
    else {
      ans.push(map[v1][v2]);
    }
  }
  return ans;
};

function getAns(map, v1, v2, visited) {
  if (!map[v1]) return -1
  if (map[v1][v2]) return map[v1][v2];
  visited.add(v1);
  for (let k in map[v1]) {
    if (visited.has(k)) continue;
    let ans = getAns(map, k, v2, visited);
    if (ans != -1) return ans * map[v1][k];
  }
  return -1;
}