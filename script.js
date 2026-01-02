const coffees = ["French Roast", "Colombian", "Kona"];

const fish = ['Angel', , 'Pirana']; // we can two commas in row in an array literal, this array
// leaves an empty slot for the unspecified element.


//map() array ke har element par ek function chalata hai
//aur uske reult se ek naya array banata hai
const array = [1, 4, 6, 12]

// the function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);

// in this the original array doesn't change

// Array → JavaScript ka array type

// prototype → jahan array ke saare common methods hote hain

// map → un methods me se ek

[2, 3, 4, 5,]

// const userName = {name:'Muktesh'}

const sales = 'Toyota'; // sales naam ka variable declare kiya jisme dtring daaala humne "Toyota"

function carTypes(name) {
    // let name = string;
    return name === "Honda" ? name : `Sorry, we don't sell ${name}.`; //? is for ternary operator yess and no. And that $ is used in template literal ` ` is for user input name
}

const car = {
    myCar: "Saturn",
    getCar: carTypes("Suzuki"),
    special: sales
};

console.log(car.myCar)
console.log(car.getCar)
console.log(car.special)

const car1 = { manyCars: { a: "Saab", b: "Jeep" }, 
            7: "Mazda" };

console.log(car1.manyCars.a); // Jeep
console.log(car1[7]); // Mazda

// const unusualPropertyNames = {
//   "": "An empty string",
//   "!": "Bang!",
// };
// console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

// console.log(unusualPropertyNames[""]); // An empty string
// console.log(unusualPropertyNames["!"]); // Bang!

