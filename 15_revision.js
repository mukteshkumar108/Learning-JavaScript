//.map()

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);
// [1, 4, 9, 16, 25]

// Extract names from objects

const users = [
  { id: 1, name: "Muktesh" },
  { id: 2, name: "Parth" },
  { id: 3, name: "Rajat" }
];

const names = users.map(user => user.name);

console.log(names);
// ["Muktesh", "Parth", "Rajat"]

//.filter()

// Filter even numbers

const numbers1 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6]


const people = [
  { name: "Aman", age: 17 },
  { name: "Ravi", age: 21 },
  { name: "Neha", age: 19 }
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);
// [{ name: "Ravi", age: 21 }, { name: "Neha", age: 19 }]

// Sum of numbers .reduce()

const numbers2 = [10, 20, 30];

const total = numbers2.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);
// 60

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }
