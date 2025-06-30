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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function find(node, sum) {
    if (!node) return false;
    sum += node.val;
    if (!node.left && !node.right) return sum == targetSum;
    return find(node.left, sum) || find(node.right, sum);
  }
  return find(root, 0);
};