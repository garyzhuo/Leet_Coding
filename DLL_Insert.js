/* DLL - Insert */

/*

insert() {
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push (value)
    if (index < 0 || index > this.length) return false

    const newNode = new Node(value)
    const before = this.get (index - 1)
    const after = before.next
    newNode.prev = before
    newNode.next = after
    after.prev = newNode
    this.length++
    reutn true
}

*/