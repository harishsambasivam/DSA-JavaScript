const { expect, test } = require('@jest/globals');
const {Stack} = require('./stack');
const stack = new Stack();

test('Push Method works!',() => {
    expect(stack.push(1)).toBe(0);
    expect(stack.push(2)).toBe(1);
    expect(stack.push(3)).toBe(2);
    expect(stack.push(4)).toBe(3);
})

test('View Method works!', () => {
    expect(stack.view().toString()).toBe([4,3,2,1].toString());
    const emptyStack = new Stack();
    expect(emptyStack.view().toString()).toBe([].toString());
});

test('Pop method Works!', () => {
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
});


test('Peak Method works!', () => {
    expect(stack.push(1)).toBe(0);
    expect(stack.push(2)).toBe(1);
    expect(stack.peek()).toBe(2);
});



test('Length method works!', () => {
    stack.pop();
    stack.pop();
    expect(stack.length()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.length()).toBe(2);
})