// Arrays

//const fruits = new Array(); // bad approach

const fruits = ['Apple','Banana','Guava','Pear']

// Some array methods

fruits.push('Watermelon'); //this add items to an array

fruits.pop(); //removes the last item

fruits.shift() //removes the first item

fruits.unshift('Mango')

//const results = fruits.map(fruits => fruits.toUpperCase());

//map() method changes or transforms the array and doen't change the original array

results = fruits.filter(fruits => fruits.length > 5);

console.log(results); // so filter goes through one element at a time and
//and runs a condition on each element. If condition is true -> element is kept
//if false -> element is removed and returns a new array.

// Spread Operator (...)

const fruits1 = ['Apple','Melon','Strawberry','Dragonfruit']

const newFruits = ['Blue berry', ...fruits1, 'Tomato']

console.log(newFruits);

const userName = {
    name : 'Muktesh',
    age : 20
};

console.log(userName);

const copy = {...userName}

console.log(copy);

// Day 7 – forEach vs map

let nums = [1, 2, 3];

nums.forEach(n => console.log(n * 2));

let doubled = nums.map(n => n * 2);
console.log(doubled);

// Array push vs concat
let a = [1, 2];
a.push(3);          // mutates
let b = a.concat(4); // new array

// Use push() when modifying the same array is OK

// Use concat() when you want to keep the original array unchanged

// map vs filter

const nums1 = [1,2,3,4,5];

const doubled1 = nums1.map(n=>n*2);

const evens = nums1.filter(n=> n%2 === 0);

console.log(doubled1);

console.log(evens);
