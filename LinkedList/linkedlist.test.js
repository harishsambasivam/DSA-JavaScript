const {LinkedList} = require('./linkedlist');
const linkedlist = new LinkedList();

describe('Linked List',() => {

    it('should add node to end of the list',() => {
        expect(linkedlist.push(10)).toBe(1);
        expect(linkedlist.push(20)).toBe(2);
        expect(linkedlist.push(30)).toBe(3);
     });

     it('should remove node from end of the list', () => {
         expect(linkedlist.pop()).toBe(30);
         expect(linkedlist.pop()).toBe(20);
         expect(linkedlist.pop()).toBe(10);
         expect(linkedlist.pop()).toBeUndefined;
     })

     it('should add node to front of the list', () => {
         expect(linkedlist.unshift(100)).toBe(1);
         expect(linkedlist.unshift(200)).toBe(2);
         expect(linkedlist.unshift(300)).toBe(3);
     })

     it('should remove node from front of the list', () => {
         expect(linkedlist.shift()).toBe(300);
         expect(linkedlist.shift()).toBe(200);
         expect(linkedlist.shift()).toBe(100);
         expect(linkedlist.shift()).toBeUndefined;

     })
})