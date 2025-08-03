function DLNode(val, left, right) {
  this.val = val;
  this.right = right;
  this.left = left;
}

function LruCache(capacity) {
  this.size = 0;
  this.left = new DLNode();
  this.right = new DLNode();
  this.map = {};
  this.right.left = this.left;
  this.left.right = this.right;

  this.add = (val) => {
    if (val in this.map) {
      this.delNode(this.map[val]);
    }
    if (this.size == capacity) {
      this.deleteLeft();
    }
    const right = this.right;
    const rl = right.left;
    const node = new DLNode(val, rl, right);
    right.left = node;
    rl.right = node;
    this.map[val] = node;
    this.size++;
  };

  this.deleteLeft = () => {
    delete this.map[this.left.right.val];
    this.left.right = this.left.right?.right;
    this.size--;
  };

  this.delNode = (node) => {
    const l = node.left;
    const r = node.right;
    l.right = r;
    r.left = l;
  };

  this.toArray = () => {
    const arr = [];
    let tmp = this.right.left;
    for (let i = this.size - 1; i >= 0; i--) {
      arr.push(tmp.val);
      tmp = tmp.left;
    }
    return arr;
  };
}

const lru = new LruCache(3);
lru.add(1);
lru.add(2);
lru.add(3);
lru.add(1);
lru.add(3);

console.log(lru.toArray());