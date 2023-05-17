/* Linked Lists Big O
    */
// this will be the class for the node
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// this is creating the node with the value of 4 and the next value of null
// const newNode = new Node(4);

// class LinkedList {
//     constructor() {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
// }

// let myLinkedList = new LinkedList(4);

// myLinkedList


// WRITE NODE CLASS HERE //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    // WRITE LL CONSTRUCTOR HERE //
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}


function test() {
    let myLinkedList = new LinkedList(4);

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test(4);


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/