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

class DoublyLinkedList {}
constructor(value) {
const newNode = new Node(value)
this.head = newNode
this.tail = this.head
this.length = 1
}
}

when this node is created it will have a next and prev 
*/