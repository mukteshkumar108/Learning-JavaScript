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

// some vs every

const nums2 = [1,3,5,7];

console.log(nums2.some(n => n % 2 === 0)); //false

console.log(nums2.every(n => n > 0)); //true

// Less efficient approach
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// More efficient approach using critical thinking
function findDuplicatesOptimized(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}

// the code above is copied from somewhere right now that code is totally unique for me 
// making me think how did developer make such a good code cut to chase code little tricky for me to understand
// maybe need little more knowledge about arrays which is not enough to understand this code
