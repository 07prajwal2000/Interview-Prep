function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (head) {
  if (!head) return head;
  const map = {}; // old -> new
  const q = [head];
  while (q.length) {
    const node = q.shift();

    if (!(node.val in map)) map[node.val] = new _Node(node.val);

    for (let nei of node.neighbors) {
      const parent = map[node.val]; // newParent
      if (!(nei.val in map)) {
        q.push(nei);
        map[nei.val] = new _Node(nei.val);
      }
      parent.neighbors.push(map[nei.val]);
    }
  }
  const newGraph = map[head.val];
  return newGraph;
};

const a = new _Node(1);
const b = new _Node(2);
const c = new _Node(3);
const d = new _Node(4);

a.neighbors = [b, d];
b.neighbors = [a, c];
c.neighbors = [b, d];
d.neighbors = [a, c];

cloneGraph(a);