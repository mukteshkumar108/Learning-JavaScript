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
