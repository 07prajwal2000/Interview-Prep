/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function f(l, r) {
    if (l > r) return null;
    const mid = (l + r) >> 1;
    const node = new TreeNode(nums[mid]);
    node.left = f(l, mid - 1);
    node.right = f(mid + 1, r);
    return node;
  }
  return f(0, nums.length - 1);
};