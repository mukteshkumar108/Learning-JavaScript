// Arrow function => Function ko likhne ka short and moder style

//Template literal => Function ke andar variable dalne ka clean way

const M = "Muktesh";

const message = "Hello " +  M + ", Apka din kaisa hai?"; //old way

console.log(message);

const backticks = "backtick ``";

const message1 = `Here we will use ${backticks}`;

console.log(message1);

let userName = {
    name : "Muktesh",
    rollNumber : 25,
    class : "Special grade",
}

console.log(userName.name);

// const { name, age } = user;
const user = {
    name : "Akaash",
    state: "Bihar",
    country: "India",
    age: 21,
}
const { name, age } = user;

console.log({ name, age});

const ashramGang = ['PanMasala', 'Muktesh', 'EveningHandsome', 'Rand1', 'Rand2','Playboi'];

const [first, ,third] = ashramGang;

console.log([first,third]);

// Reduce work is too combine all the array elements together until you left with single value
const numbers = [34 , 45 , 57 , 90];

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum)

// Filter .filter() is used to filter array by checking it each item and check if it passes the specific condition
// (a test to check it item is true or false). If an item passes, it get into new array, and the items that failed gets
// kicked out

const number2 = [2,3,67,65,43,34,22];

const even = number2.filter(num => num % 2 === 0);

console.log(even);

// .map() uses a specific funtion it got and run that function on each item of an array and gives new array with transformed values.

const doubledValue = numbers.map(num => num * 5);

console.log(doubledValue)

//Spread operator and Rest operator might look same but are different 

//Spread operator is to unpack things. You you use it when you already have an array and objects. Aur uske individual items ko
//bahar nikal ke unko copy karna, combine karna yah function mein pass karna.
/*When you try to copy arr1into arr2 you will get copy but problem is here that if you change data in arr2 it will also change the 
data of arr1 */

let fruits = ['Apples', 'Banana', 'Mango']; //code will crash if yuse const here
const vegies = ['Pea', 'Potato', 'Carrot'];

const shoppingList = [...vegies, ...fruits , 'Milk']

console.log(shoppingList)

let fruits1 = ['PineApple']

fruits = fruits1

console.log(fruits1)

//Rest in function (Gathering Arguements)

// When creating a function and you don't know how many arguements will be passed by the user then you use Rest 

const dimensions = [1970, 1080, 60, 'FPS', 'Ultrawide'];

const [width, height, ...otherSpecs] = dimensions; //rest is used to gather leftover arguements

console.log(width);
console.log(height);
console.log(otherSpecs);

// The ...hobbies parameter gathers all extra arguments into an array
const showProfile = (name, ...hobbies) =>{
    console.log(`Name: ${name}`);
    console.log(`Hobbies Array:`, hobbies);
    return(name , hobbies);
}
// 'Mukesh' goes into name. The rest get gathered into the hobbies array.
console.log(showProfile('Muktesh', 'Cooking', 'Coding', 'Gaming'));

