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
var rightSideView = function (root) {
	const q = [];
	const ans = [];
	q.push(root);
	while (q.length) {
		const len = q.length;
		let right = null;
		for (let i = 0; i < len; i++) {
			const node = q.shift();
			if (!node) continue;
			right = node;
			q.push(node.left);
			q.push(node.right);
		}
		right && ans.push(right.val);
	}
	return ans;
};
