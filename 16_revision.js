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

