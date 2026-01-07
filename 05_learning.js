// Day 7 – Truthy & Falsy in JavaScript

console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

// Day 7 – Mutability vs Immutability

let str = "hello";
str.toUpperCase();
console.log(str); // unchanged

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // changed
