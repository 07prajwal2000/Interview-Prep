/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode();
  let head = dummy;
  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;
    carry = 0;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }
    dummy.next = new ListNode(sum);
    dummy = dummy.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  let temp = l1 || l2;
  while (temp) {
    let sum = temp.val + carry;
    carry = 0;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }
    dummy.next = new ListNode(sum);
    dummy = dummy.next;
    temp = temp.next;
  }
  if (carry) {
    dummy.next = new ListNode(1);
    dummy = dummy.next;
  }
  return head.next;
};