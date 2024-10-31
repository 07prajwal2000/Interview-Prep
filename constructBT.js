function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderMap = {};
  for (let i = 0; i < inorder.length; i++) {
    inorderMap[inorder[i]] = i;
  }
  let l = 0, r = inorder.length - 1;
  return build(inorderMap, l, l, r, inorder, preorder);
};

function build(map, l, rootIndex, r, inorder, preorder) {
  let node = new TreeNode(preorder[rootIndex]);
  let mid = map[node.val];
  if (mid > l)
    node.left = build(map, l, rootIndex + 1, mid - 1, inorder, preorder);
  if (mid < r)
      node.right = build(map, mid + 1, rootIndex + mid - l + 1, r, inorder, preorder);
  return node;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));