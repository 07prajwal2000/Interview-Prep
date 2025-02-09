/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head.next) return null;
  if (!head.next.next) {
    head.next = null;
    return head;
  }
  let prev = null, slow = head, fast = head;
  while (fast && fast.next) {
    fast = fast.next?.next;
    prev = slow;
    slow = slow.next;
  }
  prev.next = slow.next;
  return head;
};