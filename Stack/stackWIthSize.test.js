const { expect } = require("@jest/globals");
const { Stack } = require("./stackWithSize");
const stack = new Stack(4);

describe("Stack implementation with size", () => {
  it("should push elements to stack!", () => {
    expect(stack.push(1)).toBe(0);
    expect(stack.push(2)).toBe(1);
    expect(stack.push(3)).toBe(2);
    expect(stack.push(4)).toBe(3);
    expect(stack.push(5)).toBe("Stack Overflow");
  });

  it("should pop elements from the stack!", () => {
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe("Stack Underflow");
  });
});
