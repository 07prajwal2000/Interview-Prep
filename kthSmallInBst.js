function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let c = 0;
  function find(root, k) {
      if (!root) return;
      let ans = find(root.left, k, c);
      if (ans != undefined) return ans;
      c++;
      if (c == k) return root.val;
      return find(root.right, k, c);
  }
  return find(root, k, 0);
};


console.log(kthSmallest(new TreeNode(3, new TreeNode(1, undefined, new TreeNode(2)), new TreeNode(4)), 1));