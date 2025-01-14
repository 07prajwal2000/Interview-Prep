var isPalindrome = function (head) {
  let s = head, f = head;
  while (f) {
    s = s.next;
    f = f?.next?.next;
  }
  let mid = reverseList(s);
  let start = head;
  while (start && mid) {
    if (start.val != mid.val) return false;
    start = start.next;
    mid = mid.next;
  }
  return true;
};

var reverseList = function (head) {
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