const { expect } = require("@jest/globals");
const { Queue } = require("./queue");
const queue = new Queue();

describe("Queue using linked list", () => {
  it("should add elements to queue!", () => {
    expect(queue.enqueue(1)).toBe(0);
    expect(queue.view().toString()).toBe([1].toString());
    expect(queue.enqueue(2)).toBe(1);
    expect(queue.view().toString()).toBe([1, 2].toString());
    expect(queue.enqueue(3)).toBe(2);
    expect(queue.view().toString()).toBe([1, 2, 3].toString());
    expect(queue.enqueue(4)).toBe(3);
    expect(queue.view().toString()).toBe([1, 2, 3, 4].toString());
    expect(queue.enqueue(5)).toBe(4);
    expect(queue.view().toString()).toBe([1, 2, 3, 4, 5].toString());
  });

  it("should remove elements from front of queue!", () => {
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
  });

  it("should print first element in queue!", () => {
    expect(queue.peek()).toBeUndefined;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it("should print the queue!", () => {
    expect(queue.view().toString()).toBe([1, 2].toString());
    queue.dequeue();
    queue.dequeue();
    expect(queue.view().toString()).toBe([].toString());
  });
});
