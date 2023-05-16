// POINTERS
// without using a "pointer":
let num1 = 5
let num2 = num1 // num2 is a copy of num1

// but if we say num1 = 10, num2 will still be 5
num1 = 10
// num2 is still 5 because it is a copy of num1


// with a "pointer":

let obj1 = {
    value: 11   // we are saying that obj 1 points to the value 11
}

let obj2 = obj1 // obj2 is a pointer to obj1, or make obj2 point at the exact same object in memory as obj1

// now if we changed obj1 to point to 15, obj2 will also point to 15
obj1.value = 15 // this is how we change the value of obj1

// obj2 is now also 15 because it is pointing to the same object in memory as obj1

// that is because obj2 is a pointer to obj1, not a copy of obj1 like num2 was a copy of num1

// now if we did this:
obj3 = {
    value: 57
}
// and we said obj2 = obj3, obj2 would now point to obj3, not obj1 anymore, so obj1 would still be 15, but obj2 would now be 57

// if we did this:
obj1 = obj3 // the value of obj1 would now be 57 and javascript would "garbage collect" the object that was 15 because nothing is pointing to it anymore