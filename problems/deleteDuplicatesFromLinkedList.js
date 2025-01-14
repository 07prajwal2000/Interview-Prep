var deleteDuplicates = function (head) {
  let tmp = head;
  let prev = null;
  while (tmp) {
    prev = tmp;
    tmp = tmp.next;
    while (tmp && prev.val == tmp.val) {
      tmp = tmp.next;
      prev.next = tmp;
    }
  }
  return head;
};