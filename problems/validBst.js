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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return valid(root, -Infinity, Infinity);
};

function valid(root, l, r) {
  if (!root) return true;
  const val = root.val;
  if (l >= val || r <= val) return false;
  return valid(root.left, l, val) && valid(root.right, val, r);
}