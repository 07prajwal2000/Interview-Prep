/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return head;
  return solve(head, null);
};

function solve(head, tail) {
  let slow = head, fast = head;
  while (fast != tail && fast.next != tail) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (head == tail) return null;
  let node = new TreeNode(slow.val);
  node.left = solve(head, slow);
  node.right = solve(slow.next, tail);
  return node;
}