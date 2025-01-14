/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let t = node;
  while (t.next && t.next.next) {
    t.val = t.next.val;
    t = t.next;
  }
  t.val = t.next.val;
  t.next = null;
};