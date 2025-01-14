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
var levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  const q = new Queue([root]);
  while (q.size()) {
    const res = [];
    const len = q.size();
    for (let i = 0; i < len; i++) {
      const node = q.dequeue();
      res.push(node.val);
      node.left && q.enqueue(node.left);
      node.right && q.enqueue(node.right);
    }
    ans.push(res);
  }
  return ans;
};