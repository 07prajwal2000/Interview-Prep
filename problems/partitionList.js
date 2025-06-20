/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const n1 = new ListNode(), n2 = new ListNode();
  let node1 = n1, node2 = n2, tmp = head;
  while (head) {
    if (head.val < x) {
      node1.next = head;
      node1 = node1.next;
    } else {
      node2.next = head;
      node2 = node2.next;
    }
    head = head.next;
  }
  node1.next = n2.next;
  node2.next = null;
  return n1.next;
};
