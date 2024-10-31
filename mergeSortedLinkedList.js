/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let t = new ListNode(0, null);
  let head = new ListNode(0, t);
  while (l1 && l2) {
    if (l1.val > l2.val) {
      t.next = l2;
      l2 = l2.next;
    } else {
      t.next = l1;
      l1 = l1.next;
    }
    t = t.next;
  }
  if (l1) {
    t.next = l1;
    l1 = l1.next;
  }
  if (l2) {
    t.next = l2;
    l2 = l2.next;
  }
  return head.next?.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))));