// Activity 1
// Task 1
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Task 2: 
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            const removed = this.head;
            this.head = null;
            return removed;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current;
    }

    displayNodes() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

console.log("Linked List:");
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.displayNodes();
list.removeNode();
list.displayNodes();

// Activity 2
// Task 3
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

console.log("Stack:");
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

// Task 4
function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversed = "";
    while (stack.items.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello"));

// Activity 3
// Task 5
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}
// Task 
console.log("Queue:");
const queue = new Queue();
queue.enqueue("Job 1");
queue.enqueue("Job 2");
queue.enqueue("Job 3");
console.log(queue.front());
queue.dequeue();
console.log(queue.front());

// Activity 4
// Task 7
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Task 8
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

console.log("Binary Tree:");
const tree = new BinaryTree();
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(1);
tree.inOrderTraversal();