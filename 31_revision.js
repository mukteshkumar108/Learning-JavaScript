var name = "Muktesh";

function printName() {
    var greeting = "Hello";
    console.log(greeting + " " + name);
}

printName();

/* Execution context is an abstract enviornment where javascript code is evaluated and executed

It has two phases:

1. Memory creation phase
2. Execution phase

Global context created 
Memory phase: 

name -> undefined 
printName -> function referance

Execution Phase:
name = "Muktesh"

Function context created

Memory phase:
greeting -> undefined 

Execution Phase:

greeting = "Hello"
console.log(...)
*/

