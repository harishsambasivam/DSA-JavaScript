class MinHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
    return this.heap;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (this.heap[index] < this.heap[parentIdx] && parentIdx >= 0) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  swap(index, parentIdx) {
    let temp = this.heap[index];
    this.heap[index] = this.heap[parentIdx];
    this.heap[parentIdx] = temp;
  }
}
