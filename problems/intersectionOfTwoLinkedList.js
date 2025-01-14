/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = 0, lenB = 0;
  let tempA = headA, tempB = headB;
  while (tempA) {
    tempA = tempA.next;
    lenA++;
  }
  while (tempB) {
    tempB = tempB.next;
    lenB++;
  }
  tempA = lenA > lenB ? headA : headB; // longer
  tempB = lenA > lenB ? headB : headA; // shorter
  let diff = Math.abs(lenA - lenB);
  while (tempA && diff > 0) {
    diff--;
    tempA = tempA.next;
  }
  while (tempA && tempB) {
    if (tempA == tempB) return tempA;
    tempA = tempA.next;
    tempB = tempB.next;
  }
  return null;
};