class Solution {
  flatten(head) {
    let temp = head.next;
    let newHead = head;
    while (temp) {
      newHead = this.mergeTwoLists(newHead, temp);
      temp = temp.next;
    }
    return newHead;
  }

  mergeTwoLists(l1, l2) {
    let t = new Node(0);
    let head = new Node(0);
    head.bottom = t;
    while (l1 && l2) {
      if (l1.data > l2.data) {
        t.bottom = l2;
        l2 = l2.bottom;
      } else {
        t.bottom = l1;
        l1 = l1.bottom;
      }
      t = t.bottom;
    }
    if (l1) {
      t.bottom = l1;
      l1 = l1.bottom;
    }
    if (l2) {
      t.bottom = l2;
      l2 = l2.bottom;
    }
    return head.bottom?.bottom;
  };
}