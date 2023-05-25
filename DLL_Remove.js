/* DLL Remove Method */

/*

remove (index) {
    if (index === 0) return this.shift()
    if (index === this.length -1) return this.pop()
    if (index < 0 || index >= this.length) return undefined

    const temp = this.get(index)

    temp.prev.next = temp.next
    temp.next.prev = temp.prev

    temp.next = null
    temp.prev = null

    this.length --
    return this
}

*/