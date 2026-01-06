// STRING METHODS

let str = "Muktesh is top 1% software engineer"

console.log(str.length); //length of string

console.log(str[0]);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.includes("top"));
// true

console.log(str.indexOf("software"));
// 18

console.log(str.startsWith("Muktesh"));
// true

console.log(str.endsWith("engineer"));
// true

console.log(str.slice(8, 10));
// "is"