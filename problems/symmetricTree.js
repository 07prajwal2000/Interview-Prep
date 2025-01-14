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
var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;
  const q = [root.left, root.right];
  while (q.length > 0) {
    const n = q.length;
    for (let i = 0; i < n; i++) {
      const l = q.shift();
      const r = q.shift();
      if (!l && !r) break;
      if (!r || !l) return false;
      if (l.val != r.val) return false;
      q.push(l.left);
      q.push(r.right);
      q.push(l.right);
      q.push(r.left);
    }
  }
  return true;
};