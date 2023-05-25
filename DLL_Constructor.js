/* Double Linked List - Constructor */

/* a doubly linked list instead of going one way --> it can go both left and right <-- and --> 

before this is how it would look like - 

class Node {
    constructor(value) {
    this.value = value
    this.next = null
    }
}


with a DLL this is how it would look like 
class Node {
    constructor(value) {
    this.value = value
    this.next = null
    this.prev = null <-- this is add 
    }
}

class DoublyLinkedList {  
constructor(value) {
const newNode = new Node(value)
this.head = newNode
this.tail = this.head
this.length = 1
}
}


once again the only difference would be instead of a single linked list going -->
this would going <-- and -->
when this node is created it will have a next and prev 
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
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



let myDLL = new DoublyLinkedList(7);

myDLL.getHead();
myDLL.getTail();
myDLL.getLength();

console.log("\nDoubly Linked List:");
myDLL.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/