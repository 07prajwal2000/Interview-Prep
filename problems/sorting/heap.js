class MinHeap {
  constructor() {
    this.length = 3;
    this._array = Array(this.length);
    this.i = 0;
  }
  static fromArray(arr) {
    const minHeap = new MinHeap();
    for (let ele of arr) {
      minHeap.push(ele);
    }
    return minHeap;
  }
  size() {
    return this.i;
  }
  peek() {
    return this._array[0];
  }
  pop() {
    let ele = this._array[0];
    this._array[0] = this._array[this.i - 1];
    this.i--;
    this.reorder(0);
    return ele;
  }
  reorder(index) {
    if (index < 0 || index > this.i) return;
    let l = this.getLeftIndex(index);
    let r = this.getRightIndex(index);
    if (l <= this.i && this._array[l] < this._array[index]) {
      this.swapByIndex(l, index);
      this.reorder(l);
    } 
    if (r <= this.i && this._array[r] < this._array[index]) {
      this.swapByIndex(r, index);
      this.reorder(r);
    }
  }
  _resize() {
    if (this.i + 1 >= this.length) {
      this.length *= 2;
      const tmp = this._array;
      this._array = Array(this.length);
      for (let idx = 0; idx < tmp.length; idx++) {
        this._array[idx] = tmp[idx];
      }
    }
  }
  push(num) {
    // resize mechanism
    this._resize();
    this._array[this.i] = num;
    let ti = this.i;
    while (ti >= 0 && this.getParent(ti) > this._array[ti]) {
      this.swapByIndex(this.getParentIndex(ti), ti);
      ti = this.getParentIndex(ti);
    }
    this.i++;
  }
  getParentIndex(idx) {
    return idx >> 1;
  }
  getLeftIndex(idx) {
    return (idx * 2) + 1;
  }
  getRightIndex(idx) {
    return (idx * 2) + 2;
  }
  getParent(idx) {
    idx = this.getParentIndex(idx);
    return this._array[idx];
  }
  getLeft(idx) {
    idx = this.getLeftIndex(idx);
    if (idx > this.i) return undefined;
    return this._array[idx];
  }
  getRight(idx) {
    idx = this.getRightIndex(idx);
    if (idx > this.i) return undefined;
    return this._array[idx];
  }
  swapByIndex(ia, ib) {
    let tmp = this._array[ia];
    this._array[ia] = this._array[ib];
    this._array[ib] = tmp;
  }
}

// const minHeap = new MinHeap();
// minHeap.push(6);
// minHeap.push(2);
// minHeap.push(3);
// minHeap.push(4);
// minHeap.push(1);
// minHeap.push(-2);
const minHeap = MinHeap.fromArray([34, 45, 22, 89, 76]);
while (minHeap.size()) {
  console.log(minHeap.pop());
}