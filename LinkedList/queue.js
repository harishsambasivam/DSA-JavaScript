/* Queue implementation using LinkedList
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a "First In First Out"
 * system, where the first item to enter the queue is the first to be removed. This
 * implementation uses an array to store the queue.
 */

// Functions: enqueue, dequeue, peek, view
// Queue implementation using LinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.tail = null;
    }
    this.head = oldHead.next;
    this.length--;
    return oldHead.value;
  }

  peek() {
    return this.head.value;
  }

  view() {
    const queue = [];
    let currentNode = this.head;
    while (currentNode) {
      queue.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return queue;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

for (let i = 0; i < 5; i++) {
  console.log(`Served ${queue.dequeue()}`);
  console.log(queue.view());
}
