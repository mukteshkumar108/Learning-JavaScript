function sayHi(){
    console.log('Hello');
}

function greet(){
    console.log('G start');
    sayHi();
    console.log('G end');
}

console.log('Program start');
greet();
console.log('Program end');

// CallStack

/* The callstack is a data structure that tracks execution contexts
It operates on LIFO principle.

Every time a function is invoked, a new execution context is pushed onto the stack.

When function returns, its context is popped. */

function multiply(a, b) {
  return a * b;
}

function square(num) {
  return multiply(num, num);
}

function printSquare(n) {
  const result = square(n);
  console.log("Square is:", result);
}

printSquare(5);