/* SinglyLinkedList!!
 * A linked list is implar to an array, it hold values.
 * However, links in a linked list do not have indexes. With
 * a linked list you do not need to predetermine it's size as
 * it grows and shrinks as it is edited. This is an example of
 * a singly linked list.
 */

// Functions - push, pop, shift, unshift, get, set, insert, remove, print

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

  // to remove element from front of the linkedlist
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

  // to get an element in particular index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // to update an element in particular index
  set(index, value) {
    let node = this.get(index);
    if (node != undefined) {
      node.value = value;
      return true;
    }
    return false;
  }

  // insert an node into linkedlist
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let node = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;
    previousNode.next = node;
    node.next = nextNode;
    return ++this.length;
  }

  // to remove an node from the linkedlist

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let previousNode = this.get(index - 1);
    let node = previousNode.next;
    let nextNode = node.next;
    previousNode.next = nextNode;
    // unlinking from linkedlist chain
    node.next = null;
    this.length--;
    return node.value;
  }

  // to print the list

  print() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

module.exports = { LinkedList };
