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
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

logItems(10)
