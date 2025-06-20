// https://leetcode.com/problems/reverse-linked-list-ii/solutions/6861781/javascript-explanation-with-comments-by-2ga4y/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let i = 1, cur = head, prev = null;
  while (i < left) {
    prev = cur;
    cur = cur.next;
    i++;
  }
  if (!cur) return head;
  let c = cur, p = prev;
  while (i <= right) {
    let tmp = c.next;
    c.next = p;
    p = c;
    c = tmp;
    i++;
  }
  cur.next = c;
  if (cur == head) {
    return p;
  }
  prev.next = p;
  cur.next = c;
  return head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
console.log(reverseBetween(head, 2, 4));