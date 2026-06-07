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

