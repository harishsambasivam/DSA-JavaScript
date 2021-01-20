const { LinkedList } = require("./linkedlist");
const linkedlist = new LinkedList();

describe("Linked List", () => {
  it("should add node to end of the list", () => {
    expect(linkedlist.push(10)).toBe(1);
    expect(linkedlist.push(20)).toBe(2);
    expect(linkedlist.push(30)).toBe(3);
  });

  it("should remove node from end of the list", () => {
    expect(linkedlist.pop()).toBe(30);
    expect(linkedlist.pop()).toBe(20);
    expect(linkedlist.pop()).toBe(10);
    expect(linkedlist.pop()).toBeUndefined;
  });

  it("should add node to front of the list", () => {
    expect(linkedlist.unshift(100)).toBe(1);
    expect(linkedlist.unshift(200)).toBe(2);
    expect(linkedlist.unshift(300)).toBe(3);
  });

  it("should remove node from front of the list", () => {
    expect(linkedlist.shift()).toBe(300);
    expect(linkedlist.shift()).toBe(200);
    expect(linkedlist.shift()).toBe(100);
    expect(linkedlist.shift()).toBeUndefined;
  });

  it("should get value of node in given index", () => {
    linkedlist.push(1);
    linkedlist.push(2);
    expect(linkedlist.get(1).value).toBe(2);
    expect(linkedlist.get(0).value).toBe(1);
    expect(linkedlist.get(-1)).toBeUndefined;
    expect(linkedlist.get(2)).toBeUndefined;
  });

  it("should set the value of node in given index", () => {
    expect(linkedlist.set(2)).toBeUndefined;
    expect(linkedlist.set(-1)).toBeUndefined;
    expect(linkedlist.set(0, 100)).toBe(true);
    expect(linkedlist.set(1, 200)).toBe(true);
    expect(linkedlist.print().toString()).toBe([100, 200].toString());
  });

  it("should insert node to a given index", () => {
    expect(linkedlist.insert(3, 200)).toBeUndefined;
    expect(linkedlist.insert(-1, 0)).toBeUndefined;
    expect(linkedlist.insert(2, 300)).toBe(3);
    expect(linkedlist.insert(3, 400)).toBe(4);
    expect(linkedlist.print().toString()).toBe([100, 200, 300, 400].toString());
  });

  it("should remove element from the given index", () => {
    expect(linkedlist.remove(4)).toBeUndefined;
    expect(linkedlist.remove(-1)).toBeUndefined;
    expect(linkedlist.remove(3)).toBe(400);
    expect(linkedlist.remove(0)).toBe(100);
    expect(linkedlist.remove(1)).toBe(300);
    expect(linkedlist.print().toString()).toBe([200].toString());
  });

  it("should print the list", () => {
    linkedlist.pop();
    linkedlist.push(1);
    linkedlist.push(2);
    linkedlist.push(3);
    linkedlist.push(4);
    expect(linkedlist.print().toString()).toBe([1, 2, 3, 4].toString());
  });

  it("should reverse the array", () => {
    expect(linkedlist.reverse().toString()).toBe([4, 3, 2, 1].toString());
    expect(linkedlist.reverse().toString()).toBe([1, 2, 3, 4].toString());
  });
});
