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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let head = new TreeNode();
  function flat(node) {
    if (!node) return;
    let l = node.left, r = node.right;
    head.right = node;
    head.left = null;
    head = head.right;
    flat(l);
    flat(r);
  }
  flat(root);
};