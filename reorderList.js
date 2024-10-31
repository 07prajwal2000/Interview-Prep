/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let s = head, f = head?.next;
  if (!f) return;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }
  let mid = s;
  let reversed = reverse(mid);
  mid.next = null;
  let start = head;
  let taken = false;
  let temp = null;
  while (reversed && start) {
    if (!taken) {
      temp = start.next;
      start.next = reversed;
      reversed = reversed.next;
      taken = true;
    } else {
      taken = false;
      start.next = temp;
    }
    start = start.next;
  }
};

function reverse(head) {
  if (!head) return null;
  let prev = null, cur = head, next = head?.next;
  while (cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next?.next;
  }
  return prev;
}