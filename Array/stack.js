/* Stack implementation using Array
* A stack is exactly what it sounds like. An element gets added to the top of
* the stack and only the element on the top may be removed. This is an example
* of an array implementation of a Stack. So an element can only be added/removed
* from the end of the array.

 Functions: push, pop, peek, view, length

 */

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  // push method to add items to top of stack.
  push(value) {
    this.stack[++this.top] = value;
    return value;
  }

  // pop method to remove from top of the stack.
  pop() {
    if (this.top === -1) return undefined;
    let topOfStack = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top--);
    return topOfStack;
  }

  // Returns the value at the top of the stack
  peek() {
    return this.stack[this.top];
  }

  // To see all the elements in the stack
  view() {
    return this.stack;
  }
}

let stack = new Stack();
