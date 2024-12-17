var lastStoneWeight = function (stones) {
  const heap = new MaxPriorityQueue();
  for (let s of stones) {
    heap.enqueue(s, s);
  }
  while (heap.size() > 1) {
    let s1 = heap.dequeue().element;
    let s2 = -1;
    if (heap.size() > 0) {
      s2 = heap.dequeue().element;
    }
    if (s2 != -1) {
      const diff = Math.abs(s1 - s2);
      diff > 0 && heap.enqueue(diff, diff);
    } else {
      return s1;
    }
  }
  return heap.size() == 0 ? 0 : heap.dequeue().element;
};