var deleteDuplicates = function (head) {
  let dummy = new ListNode(0, head);
  let tmp = dummy.next, prev = dummy;
  while (tmp && tmp.next) {
    let dup = false;
    while (tmp && tmp.next && tmp.val == tmp.next.val) {
      tmp = tmp.next;
      prev.next = tmp;
      dup = true;
    }
    if (dup) prev.next = tmp?.next;
    else prev = tmp;
    tmp = tmp?.next;
  }
  return dummy.next;
};