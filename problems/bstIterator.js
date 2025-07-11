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
 */
var BSTIterator = function (root) {
  this.s = [];
  let node = root;
  while (node) {
    this.s.push(node);
    node = node.left;
  }
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function () {
  let s = this.s;
  let node = s.pop();
  let val = node.val;
  node = node.right;
  while (node) {
    s.push(node);
    node = node.left;
  }
  return val;
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
  return this.s.length > 0;
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/