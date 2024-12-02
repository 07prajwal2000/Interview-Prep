/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;
  let cur = root,
    next = root.left;
  while (cur && next) {
    cur.left.next = cur.right;
    if (cur.next) {
      cur.right.next = cur.next.left;
    }
    cur = cur.next;
    if (!cur) {
      cur = next;
      next = cur.left;
    }
  }
  return root;

  // using O(n) memory
  const q = [root];
  while (q.length > 0) {
    const n = q.length;
    let prev = null;
    for (let i = 0; i < n; i++) {
      const cur = q.shift();
      if (!prev) prev = cur;
      else {
        prev.next = cur;
        prev = prev.next;
      }
      if (!cur) break;
      cur.left && q.push(cur.left);
      cur.right && q.push(cur.right);
    }
  }
  return root;
};

function BTNode(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

console.log(
  connect(
    new BTNode(
      1,
      new BTNode(2, new BTNode(4), new BTNode(5)),
      new BTNode(3, new BTNode(6), new BTNode(7))
    )
  )
);
