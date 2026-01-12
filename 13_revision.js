//combined assignment operator
let num1 = 10;
let num2 = 10;
let num3 = 10;
let num4 = 10;
let num5 = 10;
let num6 = 10;

let res1 = num1 += 5;
let res2 = num2 -= 5;
let res3 = num3 %= 5;
let res4 = num4 /= 5;
let res5 = num5 *= 5;
let res6 = num6 **= 5; //hmmm when I dont use any variable with combined assignment opperator it throws error.

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);

/*In JavaScript terms:
The left side must be an l-value.
What is an l-value (simple definition)
An l-value is something that:
● Refers to a memory location
● Can store a value
● Can be assigned to
*/

// Important clarification (interview-level)
// Combined assignment operators are assignment expressions, not logical expressions.
// That means:
// ● They must assign
// ● Assignment requires a target
// ● A target must be an l-value

// ++ increment operator
let numb1 = 5
let numb2 = 5

console.log(numb1++);// 5
//yeh result deta nhi pehle lekin variable mein value update kardeta hai
console.log(numb1);// 6

console.log(++numb2);
//isme value pehle hi update karke de deta hai
