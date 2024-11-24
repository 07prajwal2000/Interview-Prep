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
var swapNodes = function (head, k) {
  let slow = head;
  for (let i = 0; i < k - 1; i++) {
    slow = slow.next;
  }
  
  let fast = slow, left = slow, right = head;
  while (fast && fast.next) {
    fast = fast.next;
    right = right.next;
  }
  let t = left.val;
  left.val = right.val;
  right.val = t;
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const input = [1, 2];
const k = 1;
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
let result = swapNodes(head, k);
const arr = [];
while (result) {
  arr.push(result.val);
  result = result.next;
}
console.log(arr);