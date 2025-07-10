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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const ans = [];
  const q = [root];
  while (q.length) {
    let sum = 0;
    const len = q.length;
    let i = len;
    while (i-- > 0) {
      const node = q.shift();
      sum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(sum / len);
  }
  return ans;
};