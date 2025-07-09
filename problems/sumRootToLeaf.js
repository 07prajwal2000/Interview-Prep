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
var sumNumbers = function (root) {
  let sum = 0;
  function calc(node, num) {
    let val = (num * 10) + node.val
    if (node.left) calc(node.left, val);
    if (node.right) calc(node.right, val);
    if (!node.left && !node.right) sum += val;
  }
  calc(root, 0);
  return sum;
};