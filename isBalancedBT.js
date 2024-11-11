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
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (!root) return true;
	let l = depth(root.left);
	let r = depth(root.right);
	if (l == -1 || r == -1) return false;
	if (Math.abs(l - r) > 1) return false;
	return true;
};

// DFS
function depth(node) {
	if (!node) return 0;
	let l = depth(node.left);
	let r = depth(node.right);
	if (l == -1 || r == -1) return -1;
	if (Math.abs(l - r) > 1) return -1;
	return Math.max(l, r) + 1;
}
