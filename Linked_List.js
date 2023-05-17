/* Linked Lists Big O
    */
// this will be the class for the node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// this is creating the node with the value of 4 and the next value of null
// const newNode = new Node(4);

class LinkedList {
    constructor() {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}

let myLinkedList = new LinkedList(4);

myLinkedList