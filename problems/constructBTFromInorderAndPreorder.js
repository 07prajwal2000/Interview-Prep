var buildTree = function (preorder, inorder) {
  const inorderMap = {};
  for (let i = 0; i < inorder.length; i++) {
    inorderMap[inorder[i]] = i;
  }
  let rootIndex = 0;
  function build(map, l, r, inorder, preorder) {
    let node = new TreeNode(preorder[rootIndex]);
    let mid = map[node.val];
    if (mid > l) {
      rootIndex++;
      node.left = build(map, l, mid - 1, inorder, preorder);
    }
    if (mid < r) {
      rootIndex++;
      node.right = build(map, mid + 1, r, inorder, preorder);
    }
    return node;
  }
  let l = 0, r = inorder.length - 1;
  return build(inorderMap, l, r, inorder, preorder);
};

console.log(buildTree([1, 2], [1, 2]));
