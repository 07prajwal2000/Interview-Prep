/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k == 1) return head;
  let dummy = head;
  let prev = null;
  let newHead = head;
  while (dummy) {
    let temp = dummy;
    let slowTemp = null;
    let start = temp;
    let i = 0;
    for (i = 0; i < k && temp; i++) {
      slowTemp = temp;
      temp = temp.next;
    }
    if (!temp && i != k) break;
    let nxtOne = temp;
    slowTemp.next = null;
    let rev = reverse(start);
    if (prev) {
      prev.next = rev;
      start.next = nxtOne;
    }
    else start.next = nxtOne;
    if (newHead == head) {
      newHead = rev;
    }
    prev = start;
    dummy = nxtOne;
  }
  return newHead;
};

var reverse = function (head) {
  if (!head) return null;
  let prev = null, cur = head, next = head?.next;
  while (cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next?.next;
  }
  return prev;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))), 3));
