class Heap {
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
    while (this.heap[index] > this.heap[parentIdx] && parentIdx >= 0) {
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

  extractMax() {
    let length = this.heap.length;
    if (length <= 1) return this.heap.splice(this.heap.length - 1, 1)[0];
    let max = this.heap[0];
    let lastNode = this.heap.splice(this.heap.length - 1, 1)[0];
    this.heap[0] = lastNode;
    let index = 0;
    let leftChildIdx = 2 * index + 1;
    let rightChildIdx = 2 * index + 2;
    let swapIndex = 0;
    if (leftChildIdx < length && rightChildIdx < length) {
      var flag = true;
    }
    while (flag) {
      swapIndex =
        leftChildIdx < length && this.heap[leftChildIdx] > this.heap[index]
          ? leftChildIdx
          : index;
      swapIndex =
        rightChildIdx < length &&
        this.heap[rightChildIdx] > this.heap[swapIndex]
          ? rightChildIdx
          : swapIndex;
      if (swapIndex == index) flag = false;
      else {
        this.swap(index, swapIndex);
        index = swapIndex;
        leftChildIdx = 2 * index + 1;
        rightChildIdx = 2 * index + 2;
      }
    }
    return max;
  }
}

let heap = new Heap();
let array = [999, 777, 80, 90, 89, 20, 1, 10, 30, 15, 40];

array.forEach((e) => heap.enqueue(e));
