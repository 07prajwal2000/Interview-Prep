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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const ans = [], q = [root];
  let rev = false;
  while (q.length) {
    const res = [];
    let len = q.length;
    while (len-- > 0) {
      let node = q.shift();
      res.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(rev ? res.reverse() : res);
    rev = !rev;
  }
  return ans;
};