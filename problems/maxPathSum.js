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
var maxPathSum = function (root) {
  let max = -1e9;
  function find(node) {
    if (!node) return 0;
    let left = Math.max(0, find(node.left));
    let right = Math.max(0, find(node.right));
    let sum = left + right + node.val;
    max = Math.max(max, sum);
    return node.val + Math.max(left, right);
  }
  find(root);
  return max;
};