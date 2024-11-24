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
var reverseEvenLengthGroups = function (head) {
  if (!head) return head;
  let temp = head, prev = null;
  for (let i = 1; Boolean(temp); i++) {
    let nextHead = null, end = temp;
    let j = 1;
    while (j < i && end && end.next) {
      j++;
      end = end.next;
    }
    nextHead = end.next;
    if (j & 1 == 1) {
      prev = end;
      temp = nextHead;
    } else {
      end.next = null;
      prev.next = reverseList(prev.next);
      prev = temp;
      temp.next = nextHead;
      temp = nextHead;
    }
  }
  return head;
};

var reverseList = function (head) {
  if (!head) return null;
  let prev = null,
    cur = head,
    next = head?.next;
  while (cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next?.next;
  }
  return prev;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const input = [1, 2, 3, 4, 5];
const head = new ListNode();
let temp = head;
let idx = 0;
for (let i of input) {
  temp.val = i;
  if (idx == input.length - 1) break;
  temp.next = new ListNode();
  temp = temp.next;
  idx++;
}
let result = reverseEvenLengthGroups(head);
const arr = [];
while (result) {
  arr.push(result.val);
  result = result.next;
}
console.log("Input: ", input);
console.log("Output:", arr);