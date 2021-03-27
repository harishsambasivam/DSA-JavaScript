class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let node = this.root;
      let found = false;
      while (found == false) {
        if (value > node.value) {
          if (node.right === null) {
            node.right = newNode;
            found = true;
          }
          node = node.right;
        } else {
          if (node.left === null) {
            node.left = newNode;
            found = true;
          }
          node = node.left;
        }
      }
    }
  }

  dfsInOrder(node = this.root) {
    console.log(node);
    if (node.left) this.dfsInOrder(node.left);
    if (node.right) this.dfsInOrder(node.right);
  }

  bfs() {
    let queue = [this.root];
    let data = [];
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.left) queue.push(node.right);
    }
    return data;
  }
}

let t = new Tree();
[8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((e) => {
  t.insert(e);
});
