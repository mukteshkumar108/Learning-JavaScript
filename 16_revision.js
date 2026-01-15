// 1️. some() — Does at least one element satisfy the condition?

// Check if any number is even

const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);
// true

// Example: Any user is admin?
const users = [
  { name: "A", role: "user" },
  { name: "B", role: "admin" },
  { name: "C", role: "user" }
];

const hasAdmin = users.some(user => user.role === "admin");

console.log(hasAdmin);
// true

// 2️.every() — Do all elements satisfy the condition?

// Are all numbers positive?

const numbers1 = [2, 4, 6, 8];

const allPositive = numbers1.every(num => num > 0);

console.log(allPositive);
// true

// All students passed?
const students = [
  { name: "A", marks: 55 },
  { name: "B", marks: 70 },
  { name: "C", marks: 42 }
];

const allPassed = students.every(student => student.marks >= 40);

console.log(allPassed);
// true

// 3. .find() — Find first matching element

//Q: Find first expensive product

const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Laptop", price: 50000 }
];

const expensiveProduct = products.find(p => p.price > 1000);

console.log(expensiveProduct);
// { name: "Laptop", price: 50000 }

