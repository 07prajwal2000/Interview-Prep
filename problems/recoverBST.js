/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let n1 = null, n2 = null;
  let prev = null;

  function find(node) {
    if (!node) return;
    find(node.left);
    if (prev && prev.val > node.val) {
      if (!n1) n1 = prev;
      n2 = node;
    }
    prev = node;
    find(node.right);
  }

  find(root);
  let tmp = n1.val;
  n1.val = n2.val;
  n2.val = tmp;
};