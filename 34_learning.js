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


// Asynchronous, yaani async, ek tarika hai code likhne ka jahan tum ek operation ko complete hone ka wait kiye bina
// doosre task ko continue kar sakte ho. Matlab, tum background mein chalne wale tasks ko wait nahi karte, balki jab 
// tak woh complete ho, tum apne main thread ko aage badhate ho. Tumhare app mein, jaise agar tum kisi server se data 
// fetch kar rahe ho, toh async use karoge, taaki tumhara app freeze na ho aur user baaki ka kaam karte rahe.


// Promises ek tarah ka JavaScript object hai jo tumhe future mein ek value provide karne ka wada karta hai. Yeh teen 
// states mein hota hai: pending (jab tak kaam ho raha hai), fulfilled (jab kaam successfully ho gaya), ya rejected 
// (jab kuch gadbad ho gayi). Tum promises ka use karke asynchronous code ko handle karte ho, taaki tumhara code zyada 
// readable ho jaye, aur tum "then" aur "catch" ke through yeh manage kar sako ki success ya failure mein kya hoga.
// ".then" aur ".catch" promises ke methods hote hain. Jab promise successful ho jata hai, tumhara ".then" function 
// chalta hai, jisme tum successful result handle karte ho. Aur agar promise reject ho jaye, toh ".catch" use karke 
// tum error handle karte ho. Simple bhaasha mein, ".then" ka matlab hai "achha, kaam ho gaya, ab yeh karo" aur ".catch" 
// ka matlab "arre, kuch gadbad ho gayi, ab error sambhalo!"

//A function that simulates getting food 
const orderBurger = () => {
    return new Promise((resolve, reject) => {
        let kitchenError = true;

        if (!kitchenError){
            resolve("🍔 Here is your hot burger!"); //success!
        } else {
            reject("❌ Out of ingredients!"); //failure
        }
    });
};

//Using the promise
orderBurger()
    .then(food => console.log(food))
    .catch(err => console.log(err));