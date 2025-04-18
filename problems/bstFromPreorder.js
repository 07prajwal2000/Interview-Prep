/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const n = preorder.length;
  let i = 0;
  function construct(lb, ub) {
    if (i == n) return null;
    const cur = preorder[i];
    if (cur > ub || cur < lb) return null;
    const node = new TreeNode(cur);
    i++;
    node.left = construct(lb, cur);
    node.right = construct(cur, ub);
    return node;
  }
  return construct(-1e9, 1e9);
};