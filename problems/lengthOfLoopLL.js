// https://www.geeksforgeeks.org/problems/find-length-of-loop/1
function countNodesinLoop(head) {
  let s = head, f = head;
  while (f || f != s) {
    s = s.next;
    f = f?.next?.next;
    if (f == s) break;
  }
  if (!f) return 0;
  f = head;
  let count = 0;
  while (s != f) {
    s = s.next;
    f = f.next;
  }
  do {
    s = s.next;
    count++;
  } while (s != f);
  return count;
}