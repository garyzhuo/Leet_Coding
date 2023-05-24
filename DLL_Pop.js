/* DLL Pop Method */


/* 
So there will be many methods to go about this --

the first method 

pop() {
    if (!this.head) return undefined
    let temp = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    this.length-- 
    if(this.length ===0) {
    this.head = null
    this.tail = null
    }
    return temp
}

pop() {
    if(!this.tail) return undefined
    let temp = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    this.length-- 
}

pop() {
    if(!this.length === 0) return undefined
    let temp = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    this.length-- 
}


another way you could go about this 


pop() {
    if(this.length === 0) return undefined
    let temp = this.tail
    if(this.length === 1) {
    this.head = null
    this.tail = null
    } else {
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    }
    this.length--
    return temp
}

this is the code rearranged to make it easier to read ^
*/