/* Double Linked List - Unshift */


/*

unshift(value) {
    const newNode - new Node(value)

    if (this.length === 0) {
    this.head = newNode
    this.tail = newNode
    } else {
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    }
    this.length++
    return this
}

*/