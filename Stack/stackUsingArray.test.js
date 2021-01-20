const { expect } = require("@jest/globals");
const { Stack } = require("./stackUsingArray");
const stack = new Stack();

describe("Stack implementation using linked list", () => {
  it("should push elements to stack!", () => {
    expect(stack.push(1)).toBe(0);
    expect(stack.push(2)).toBe(1);
    expect(stack.push(3)).toBe(2);
    expect(stack.push(4)).toBe(3);
  });

  it("should print the stack!", () => {
    expect(stack.view().toString()).toBe([1, 2, 3, 4].toString());
    const emptyStack = new Stack();
    expect(emptyStack.view().toString()).toBe([].toString());
  });

  it("should pop elements from the stack!", () => {
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("should print the top element of stack!", () => {
    expect(stack.push(1)).toBe(0);
    expect(stack.push(2)).toBe(1);
    expect(stack.peek()).toBe(2);
  });
});
