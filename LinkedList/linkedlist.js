class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // to add nodes to end of list
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.length;
  }

  // to removes node from the end of list
  pop() {
    if (this.length === 0) return undefined;
    let tail = this.tail;
    let previousToTail = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      for (let i = 0; i < this.length - 2; i++) {
        previousToTail = previousToTail.next;
      }
      previousToTail.next = null;
      this.tail = previousToTail;
    }

    this.length--;
    return tail.value;
  }

  // to add element to front of the linkedlist
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let currentHead = this.head;
      node.next = currentHead;
      this.head = node;
    }
    return ++this.length;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = currentHead.next;
      currentHead.next = null;
    }
    this.length--;
    return currentHead.value;
  }
}

module.exports = {LinkedList};