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
var sortList = function (head) {
  function mergeSort(node) {
    if (!node || !node.next) return node;
    let mid = findMid(node);
    let left = node, right = mid.next;
    mid.next = null;
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  }
  return mergeSort(head);
};

function findMid(h) {
  let s = h, f = h.next;
  while (f && f.next) {
    s = s.next;
    f = f.next?.next;
  }
  return s;
}

function merge(l1, l2) {
  let dummy = new ListNode();
  let tmp = dummy;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      tmp.next = l2;
      l2 = l2.next;
    } else {
      tmp.next = l1;
      l1 = l1.next;
    }
    tmp = tmp.next;
  }
  while (l1) {
    tmp.next = l1;
    tmp = tmp.next;
    l1 = l1.next;
  }
  while (l2) {
    tmp.next = l2;
    tmp = tmp.next;
    l2 = l2.next;
  }
  return dummy.next;
}

const head = new ListNode(4, new ListNode(3, new ListNode(2)));
console.log(sortList(head));