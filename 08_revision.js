// numbers mein sirf 0 falsy hota hai
// Nan is also falsy
// '' empty string is falsy
// ' ' this empty string is true because empty space is also a character
// undefined is falsy
// null is also falsy

// Comparison Operators

// == equal to (equality)

let user1 = 7
let user2 = '7'
let res = user1 == user2 // this == is used less in modern js code because it do type conversion which converts string into number(implicit conversion)
let res2 = user1 === user2 // this === is used more in modern js code

console.log(res); // true
console.log(res2); // false //explicit conversion allowed hai

//!= not equal opposit of == equal to

let res3 = user1 != user2
let res4 = user1 !== user2

console.log(res3); // false
console.log(res4); //true

let chhote = 1
let badhe = 1

let compare = chhote >= badhe
let compare2 = chhote <= badhe
let compare3 = chhote > badhe
let compare4 = chhote < badhe

console.log(compare);
console.log(compare2);
console.log(compare3);
console.log(compare4);