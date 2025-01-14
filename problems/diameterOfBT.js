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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  function dfs(node) {
    if (!node) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    ans = Math.max(ans, l + r /* getting diameter*/);
    return Math.max(l, r) + 1;
  }
  dfs(root);
  return ans;
};
