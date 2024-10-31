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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let t = root;
  if (!t) return new TreeNode(val);
  while (t) {
    if (t.val > val) {
      if (!t.left) {
        t.left = new TreeNode(val);
        break;
      }
      t = t.left;
    } else {
      if (!t.right) {
        t.right = new TreeNode(val);
        break;
      }
      t = t.right;
    }
  }
  return root;
};