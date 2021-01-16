/* Stack implementation using LinkedList
* A stack is exactly what it sounds like. An element gets added to the top of
* the stack and only the element on the top may be removed. This is an example
* of an array implementation of a Stack. So an element can only be added/removed
* from the end of the array.

 Functions: push, pop, peek, view, length

 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    // The top of the Stack
    this.top = 0;
  }

  // Adds a value onto the beginning of the stack
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    return this.top++;
  }

  // Removes and returns the value at the beginning of the stack
  pop() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    this.top--;
    return oldHead.value;
  }

  // To see all the elements in the stack
  view() {
    let stack = [];
    let currentNode = this.head;
    while (currentNode) {
      stack.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return stack;
  }

  // Returns the value at the top of the stack
  peek() {
    if (!this.head) return undefined;
    return this.head.value;
  }

  // Returns the size of the stack
  length() {
    return this.top;
  }
}

module.exports = {Stack};