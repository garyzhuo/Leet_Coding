/*In Big O
the best case is represented by the greek letter omega Ω
average case is represented with the greek letter theta Θ
worst case is represented with the greek letter big O O

when we are measuring Big O we are always measuring the worst case
*/

/* This will be called "O of N operations"
we are passing the function the number "n" and the function will run "n" times
so if we pass n as 10 it will run 10 times
*/

// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// logItems(10)


/* Drop Constants */
/* This code ran n + n times, so this would be called 0 of 2n  0(2n) 
But it doesnt matter if theres a "constant" (the number 2), we would "drop" it, making it a O(n),
which is why this is called "drop constants"
*/

function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}
logItems(3)