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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) return false;
  if (eq(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function eq(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val != q.val) return false;
  return eq(p.left, q.left) && eq(p.right, q.right);
};