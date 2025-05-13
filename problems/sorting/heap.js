class Heap {
  comparer;

  constructor(comparer = (a, b) => (a >= b)) {
    this.arr = [];
    this.comparer = comparer;
  }

  insert(val) {
    this.arr.push(val);
    let index = this.arr.length - 1;
    if (index == 0) return;
    while (index != 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.comparer(this.arr[parentIndex], this.arr[index])) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  delete() {
    if (this.arr.length === 0) return;
    const deleted = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    let index = 0;
    const len = this.arr.length;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let target = index;

      if (left < len && this.comparer(this.arr[left], this.arr[target])) {
        target = left;
      }

      if (right < len && this.comparer(this.arr[right], this.arr[target])) {
        target = right;
      }

      if (target === index) break;

      this.swap(index, target);
      index = target;
    }

    return deleted;
  }

  swap(a, b) {
    let tmp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = tmp;
  }

  top() {
    if (this.arr.length == 0) return;
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }
}

const heap = new Heap((a, b) => (a > b)); // max heap. for min heap a < b
// [-1,2,0]
heap.insert(-1);
heap.insert(2);
heap.insert(0);
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());