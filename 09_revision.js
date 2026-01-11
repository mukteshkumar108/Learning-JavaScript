// &&(And)
// ||(Or)
// !(Not)

console.log((5 < 7) && (4 < 8));

let userAge = 20

console.dir((userAge >= 18)&&(userAge <= 24)); //true

console.log(" " || 2);
console.log("" || 0);
// OR gives truthy value not true
//if you there are both falsy values the then the last value be printed
console.log(0 && 2); 
console.log(" " && 2); 
// AND gives falsy value not false
//just opposite of OR operator 