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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  let dummy = root;
  if (root.val == key) return del(root);
  while (dummy) {
    if (dummy.val > key) {
      if (dummy.left && dummy.left.val == key) {
        dummy.left = del(dummy.left);
        break;
      } else {
        dummy = dummy.left;
      }
    } else {
      if (dummy.right && dummy.right.val == key) {
        dummy.right = del(dummy.right);
        break;
      } else {
        dummy = dummy.right;
      }
    }
  }
  return root;
};

function del(root) {
  if (!root.left) return root.right;
  else if (!root.right) return root.left;
  let lastRight = getLastRight(root.left);
  lastRight.right = root.right;
  return root.left;
}

function getLastRight(root) {
  let t = root;
  while (t?.right) {
    t = t.right;
  }
  return t;
}