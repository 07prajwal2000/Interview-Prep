function addOne(node) {
  let carry = 1;
  function add(n) {
    if (!n) return;
    add(n.next);
    if (carry) {
      n.data += 1;
      if (n.data > 9) {
        carry = 1;
        n.data = 0;
      }
      else carry = 0;
    }
  }
  add(node);
  if (carry) {
    let tmp = new Node(1);
    tmp.next = node;
    node = tmp;
  }
  return node;
}