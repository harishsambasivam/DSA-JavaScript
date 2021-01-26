class Stack {
  constructor(size) {
    this.stack = [];
    this.size = size;
    this.top = 0;
  }

  push(value) {
    if (this.top >= this.size) return "Stack Overflow";
    this.stack.push(value);
    return this.top++;
  }

  pop() {
    if (this.top <= 0) return "Stack Underflow";
    this.top--;
    return this.stack.pop();
  }
}

module.exports = { Stack };
