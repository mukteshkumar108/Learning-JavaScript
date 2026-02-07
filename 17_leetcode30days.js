//Basic syntax

// function f(a,b){ // a and b in parameters are called arguements
//     // console.log(a + b); //Writting the logic in the function body
//     return(a + b); // use return keyword to return a result if you dont use it 
//     //js engine will show result and undefined
// }

// console.log(f(34,56));

// Anonymous functions

// let sum = function(a,b){
//     return(a + b);
// }

// console.log(sum(4,90));

//Functions with functions

// function oneMoreFunction(){
//     return sum;
//     function sum(a,b){
//         return (a+b);
//     }
// }

// let sum = oneMoreFunction()

// console.log(sum(4,5));

// JavaScript has a feature called hoisting 
// where a function can sometimes be used before 
// it is initialized. You can only do this if you
//  declare functions with the function syntax.

// Closures
// An important topic in JavaScript is the concept
//  of closures. When a function is created, it has
//  access to a reference to all the variables declared
//  around it, also known as it's lexical environment.
//  The combination of the function and its enviroment
//  is called a closure. This is a powerful and often
//  used feature of the language.

//Arrow Syntax
// The other common way to declare functions is with arrow syntax. In fact, on many projects,
// it is the preferred syntax.

// const lmao = (a, b) => {
//     const sum = a + b;
//     return sum;
// };
// console.log(lmao(3, 4)); // 7


//Rest Arguments
//Spread syntax(...)

// function sum1(x,y,z) {
//     return x + y + z;
// }

// const numbers = [1,2,3]

// console.log(sum(...numbers));


// function hi(string){
//     return ('Hello World');
// }

// console.log(hi())


var createHelloWorld = function() {
    return function() {
        // console.log('Hello World')
        return ('Hello World')
    }
};

const f = createHelloWorld();
console.log(f());//Hello World

//  Parameters allow you to pass (send) values to a function.