// GEC(Global Execution Context)

/*
● Created when js file runs
● Create global object (window in browser,global in Node)
● Set this
● Hoists variables and functions
*/

console.log(this); // In browser -> window, In Node -> {}

console.log(x); // undefined
test(); // Inside Function

var x = 10;

function test(){
    console.log("Inside Function");
}

console.log(x);
test();

/*
● var attaches global object (in browser)
● Function declarations are hoisted
● Only ONE GEC exists
*/