var getMinimumDifference = function (root) {
  let min = 1e9, prev = null;

  function getMin(node) {
    if (!node) return;
    getMin(node.left);
    if (prev) min = Math.min(min, node.val - prev.val);
    prev = node;
    getMin(node.right);
  }
  getMin(root);
  return min;
};