/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let f = head, s = head;
  for (let i = 0; i < n; i++) f = f.next;
  if (!f) {
    return head.next;
  }
  while (f && f.next) {
    s = s.next;
    f = f.next;
  }
  s.next = s.next.next;
  return head;
};