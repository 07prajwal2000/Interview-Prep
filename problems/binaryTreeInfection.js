/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  const graph = {};

  function dfs(node, parent) {
    if (!node) return;

    if (parent.val in graph) graph[parent.val].push(node.val);
    else graph[parent.val] = [node.val];

    if (node.val in graph) graph[node.val].push(parent.val);
    else graph[node.val] = [parent.val];

    dfs(node.left, node);
    dfs(node.right, node);
  }

  dfs(root.left, root);
  dfs(root.right, root);

  const q = [[start, 0]];
  const visited = new Set();
  let burnLevel = 0;
  while (q.length) {
    let [value, level] = q.shift();
    if (!(value in graph)) continue;
    visited.add(value);
    const newLevel = level + 1;
    for (let nei of graph[value]) {
      if (visited.has(nei)) continue;
      burnLevel = newLevel;
      q.push([nei, newLevel]);
    }
  }
  return burnLevel;
};