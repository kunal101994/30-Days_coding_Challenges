// Activity 1: Linked List
// Task 1
class ListNode {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;  
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

let currentNode = node1;
while (currentNode !== null) {
    console.log(currentNode.value); 
    currentNode = currentNode.next;
}

// Task 2
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    removeFromEnd() {
        if (this.head === null) {
            console.log("List is empty, nothing to remove.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
    }
    display() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);


console.log("Linked List:");
list.display(); 


list.removeFromEnd();
console.log("After removing from end:");
list.display();


list.removeFromEnd();
console.log("After removing from end:");
list.display();

list.removeFromEnd();
console.log("After removing from end:");
list.display();

list.removeFromEnd();

// Actvity 2: Stack
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
            console.log("Stack is empty, nothing to pop.");
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            console.log("Stack is empty, nothing to peek.");
            return null;
        }
        return this.items[this.items.length - 1];
    }
}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element is:", stack.peek());


console.log("Popped element is:", stack.pop()); 

console.log("Popped element is:", stack.pop()); 

console.log("Top element is:", stack.peek()); 

console.log("Popped element is:", stack.pop()); 

console.log("Popped element is:", stack.pop()); 

console.log("Top element is:", stack.peek()); 

// Task 4
class Stack {
    constructor() {
        this.items = [];
    
    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Stack is empty, nothing to pop.");
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            console.log("Stack is empty, nothing to peek.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(inputString) {
    const stack = new Stack();

    for (let char of inputString) {
        stack.push(char);
    }
    let reversedString = '';
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); 
console.log("Reversed String:", reversedString);

// Activity 3 : Queue
// Task 5
class Queue {
    constructor() {
        this.items = [];
    }

    
    enqueue(element) {
        this.items.push(element);
    }

   
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to dequeue.");
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to peek.");
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element is:", queue.front()

console.log("Dequeued element is:", queue.dequeue());
console.log("Dequeued element is:", queue.dequeue());
console.log("Front element is:", queue.front());
console.log("Dequeued element is:", queue.dequeue());
console.log("Dequeued element is:", queue.dequeue()); 
console.log("Front element is:", queue.front());

// Task 6
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to dequeue.");
            return null;
        }
        return this.items.shift();
    }
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to peek.");
            return null;
        }
        return this.items[0];
    }

    // 
    printQueue.enqueue("Print job 1");
    printQueue.enqueue("Print job 2");
    printQueue.enqueue("Print job 3");

    while (!printQueue.isEmpty()) {
        const currentJob = printQueue.dequeue();
        console.log(`Processing: ${currentJob}`);
    }

    console.log("All print jobs have been processed.");
}

simulatePrintQueue();

// Activity 4: Binary Tree
// Task 7
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;  
        this.right = null; 
    }
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);


root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;


function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

console.log("In-Order Traversal of the Binary Tree:");
inOrderTraversal(root);

// Task 8
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal() {
        this.inOrder(this.root);
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}


const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-Order Traversal of the Binary Tree:");
tree.inOrderTraversal();

// Activity 5: Graph
// Task 9
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    bfs(startingVertex) {
        const visited = new Set();
        const queue = [startingVertex];

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (!visited.has(vertex)) {
                console.log(vertex);
                visited.add(vertex);

                const neighbors = this.adjacencyList.get(vertex);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}


const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

console.log("Breadth-First Search starting from vertex A:");
graph.bfs('A');

// Task 10
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); 
    }

    
    bfsShortestPath(startingVertex, targetVertex) {
        const visited = new Set();
        const queue = [[startingVertex]];
        
        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (!visited.has(vertex)) {
                const neighbors = this.adjacencyList.get(vertex);

                for (const neighbor of neighbors) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);

                    if (neighbor === targetVertex) {
                        return newPath;
                    }
                }

                visited.add(vertex);
            }
        }

        return null;
    }
}


const graph = new Graph();


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

const startNode = 'A';
const targetNode = 'F';
const shortestPath = graph.bfsShortestPath(startNode, targetNode);

if (shortestPath) {
    console.log(`Shortest path from ${startNode} to ${targetNode} is: ${shortestPath.join(' -> ')}`);
} else {
    console.log(`No path found from ${startNode} to ${targetNode}`);
}
