/* Queue implementation using Arrays
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a "First In First Out"
 * system, where the first item to enter the queue is the first to be removed. This
 * implementation uses an array to store the queue.
 */

// Functions: enqueue, dequeue, peek, view

class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  enqueue(value) {
    this.queue[this.length] = value;
    return this.length++;
  }

  dequeue() {
    let element = this.queue[0];
    this.queue = this.queue.splice(1, this.length - 1);
    this.length--;
    return element;
  }

  peek() {
    return this.queue[0];
  }

  view() {
    return this.queue;
  }
}

module.exports = {Queue};