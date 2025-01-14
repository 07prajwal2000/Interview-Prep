var detectCycle = function (head) {
  let s = head, f = head;
  while (f || f != s) {
    s = s.next;
    f = f?.next?.next;
    if (f == s) break;
  }
  if (!f) return null;
  f = head;
  while (s != f) {
    s = s.next;
    f = f.next;
  }
  return s;
};