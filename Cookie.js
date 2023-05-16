class Cookie {
    // Classes will always have something called the constructor
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

// cookieOne is an instance of the Cookie class
// we do that by using the "new" keyword, that calls the constructor from above, and passes in the color "green"
// and that will create the green cookie, cookieOne = 'green' 
let cookieOne = new Cookie('green')


// this will create the blue cookie, cookieTwo = 'blue'
// once again, we are calling the constructor from above, and passing in the color "blue"
// using the "new" keyword
let cookieTwo = new Cookie('blue')

// The .getColor() will return the color of the cookie
//console.log(cookieOne.getColor())-- This would return "green"
//console.log(cookieTwo.getColor())-- This would return "blue"

// The .setColor() will change the color of the cookie
//console.log(cookieOne.setColor('red'))-- This would change the color of cookieOne to "red"
//console.log(cookieTwo.setColor('yellow'))-- This would change the color of cookieTwo to "yellow"

// with .setColor() we are passing in the color "red" and that will change the color of cookieOne to "red"
// Now if we console.log(cookieOne.getColor()) it will return "red" instead of "green"
// and if we console.log(cookieTwo.getColor()) it will return "yellow" instead of "blue"

