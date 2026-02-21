"use strict"; 
// Strict mode enables safer JavaScript.
// It prevents accidental globals and disables old behavior 
// like linking parameters with the arguments object.

/* 1️⃣ arguments vs rest parameter */

function sumOldStyle() {
  // 'arguments' is an array-like object.
  // It contains all arguments passed to the function.
  console.log("arguments object:", arguments);

  let total = 0;

  // arguments has length and index access
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log("sumOldStyle:", sumOldStyle(10, 20, 30));

function sumModern(...numbers) {
  // 'numbers' is a real array because of rest parameter.
  console.log("rest array:", numbers);

  // We can use array methods directly
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("sumModern:", sumModern(10, 20, 30));

/* 2️⃣ Closure */

function createCounter() {
  let count = 0; 
  // 'count' is stored in the function’s lexical environment.

  return function () {
    count++; 
    // Inner function still remembers 'count'
    // even after createCounter has finished execution.
    return count;
  };
}

const counter = createCounter();

console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2

/* 3️⃣ this keyword behavior */

const user = {
  name: "Muktesh",

  greet: function () {
    // In normal method call, 'this' refers to the object.
    console.log("Hello,", this.name);
  },

  greetArrow: () => {
    // Arrow function does NOT have its own 'this'.
    // It inherits 'this' from surrounding scope (global here).
    console.log("Arrow Hello,", this.name);
  }
};

user.greet();       // Works correctly
user.greetArrow();  // Likely undefined

/* 4️⃣ Async / Await + Event Loop */

console.log("Start");

setTimeout(() => {
  // This is a macrotask (callback queue).
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  // This is a microtask.
  // Microtasks execute BEFORE macrotasks.
  console.log("Promise resolved");
});

async function fetchData() {
  console.log("Fetching...");

  // Simulate async delay using Promise
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });

  console.log(data);
}

fetchData();

console.log("End");