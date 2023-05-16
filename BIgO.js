/*In Big O
the best case is represented by the greek letter omega Ω
average case is represented with the greek letter theta Θ
worst case is represented with the greek letter big O O

when we are measuring Big O we are always measuring the worst case */

/* This will be called "O of N operations"
we are passing the function the number "n" and the function will run "n" times
so if we pass n as 10 it will run 10 times */
/*----------------------------------------------------------*/

function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

// logItems(10)

/*----------------------------------------------------------
Drop Constants

This code ran n + n times, so this would be called 0 of 2n  0(2n)
But it doesnt matter if theres a "constant" (the number 2), we would "drop" it, making it a O(n),
which is why this is called "drop constants" 
O OF N SQUARED IS CONSIDERED INEFFECNT CODING O(N2)*/
/*----------------------------------------------------------*/

function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}
// logItems(3)

/* O(n2) (O of n squared) 
this would be n * n times, so this would be called O(n2) (O of n squared)
----------------------------------------------------------*/

function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// logItems(10)

/*Even if this is O(n3) this would still be written as O(n2)
This is what O(n3) would look like, but still would be called O(n2) 
----------------------------------------------------------*/

function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k)
            }
        }
    }
}

// logItems(10)


/* Drop Non Dominants 
this is a nested for loop, we're adding another for loop after the nested for loop 
----------------------------------------------------------*/

function logItems(n) {
    // this is O(n2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
    // this is O(n)
    for (let k = 0; k < n; k++) {
        console.log(k)
    }
}
// if you add these together this would be called
// O (n2 + n) but we would drop the non dominant, which is the n
// n squared is the dominant term, n by itself is the non dominant term, so we would drop it
// logItems(10)



/* O of 1 , Otherwise known as O(1) OR CONSTANT TIME 
THIS IS THE MOST EFFIENCT BIG O 
NOTHING IS MORE EFFIECNT OF O OF 1, OR CONSTANT TIME 
----------------------------------------------------------*/

function addItems(n) {
    return n + n
}

// this is O(1) because it doesnt matter how big n is, it will always be 1 operation




/* O ( log n) 
This is a technique called divide and conquer 
This is also VERY efficent, not as efficent as O(1) but still very efficent.
----------------------------------------------------------*/

log2(8) = 3 /* 3 because 2 to the 3rd power is 8
if we take the number 8 and repeatedly cut it in half by 2, we would get 3 */

log2(1, 073, 741, 824) = 31 /* 31 because 2 to the 31st power is 1,073,741,824, 
or if we take the number 1, 073, 741, 824 and repeatedly cut it in half by 2, we would get 31 */

log2(1, 000, 000) = 20 /* 20 because 2 to the 20th power is 1,000,000, 
or if we take the number 1,000,000 and repeatedly cut it in half by 2, we would get 20 */
