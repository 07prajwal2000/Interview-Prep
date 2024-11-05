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
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

var swapPairs2 = function (head) {
  if (!head || !head.next) return head;
  let prev = head, cur = head.next;
  let dummy = cur;
  while (prev && prev.next) {
    let next1 = cur?.next;
    let next2 = next1?.next;
    cur.next = prev;
    prev.next = next2 || next1;
    prev = next1;
    cur = next2;
  }
  return dummy;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

console.log(swapPairs2(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));