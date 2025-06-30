/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;
  let q = [root];
  while (q.length) {
    let len = q.length;
    let prev = null;
    while (len-- > 0) {
      const node = q.shift();
      if (node?.left) q.push(node.left);
      if (node?.right) q.push(node.right);
      if (prev) {
        prev.next = node;
      }
      prev = node;
    }
  }
  return root;
};