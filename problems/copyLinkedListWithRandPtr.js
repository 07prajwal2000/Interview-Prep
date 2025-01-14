/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  let t = head;
  map.set(null, null);
  while (t) {
    map.set(t, new _Node(t.val));
    t = t.next;
  }
  t = head;
  while (t) {
    const newNode = map.get(t);
    newNode.next = map.get(t.next);
    newNode.random = map.get(t.random);
    t = t.next;
  }
  return map.get(head);
};