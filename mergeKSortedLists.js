/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let todo = lists.length;
  let dummy = new ListNode();
  let temp = dummy;
  const n = lists.length;
  while (todo > 0) {
    let idx = 0;
    let min = 1e9;
    for (let i = 0; i < n; i++) {
      let cur = lists[i];
      if (!cur) continue;
      if (min > cur.val) {
        min = cur.val;
        idx = i;
      }
    }
    if (!lists[idx]) {
      todo--;
      continue;
    }
    temp.next = lists[idx];
    temp = temp.next;
    if (lists[idx]) lists[idx] = lists[idx].next;
  }
  return dummy.next;
};