function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const q = [root];
  let curNode = null;
  function find(node, val) {
    if (!node) return false;
    if (node.val == val && node != curNode) return true;
    if (node.val > val) return find(node.left, val);
    return find(node.right, val);
  }
  while (q.length) {
    const node = q.shift();
    curNode = node;
    if (find(root, k - node.val)) return true;
    node.left && q.push(node.left);
    node.right && q.push(node.right);
  }
  return false;
};

console.log(findTarget(new TreeNode(1, new TreeNode(0, new TreeNode(-2)), new TreeNode(4, new TreeNode(3))), 7));