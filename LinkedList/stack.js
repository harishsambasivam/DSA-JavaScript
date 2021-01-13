class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            let oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        }
        return this.length++;
    }

    pop(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        let newHead = oldHead.next;
        this.head = newHead;
        if(this.length === 1) {
            this.tail = null;
        }
        this.length--;
        return oldHead.value;
    }

}

let list = new LinkedList();
