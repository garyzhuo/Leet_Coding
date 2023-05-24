/* DLL PUSH */

/*

push(value) {
    const newNode = newNode(value)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        newNode.prev = this.tail <-- this is only new line of code in linked list _ push method
        this.tail = newNode
    }
    this.length++
    return this
}

*/