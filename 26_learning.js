function test(a, ...b){
    console.log(a);
    console.log(b);
}

let nums = test(10, 20, 30, 40)

//interview question

// Difference btw rest paramters and spread operator
//function sum(...nums){}
//In rest paramters we use it in function paramters to pass many arguements into a parameter
// key technical points :
//it always returns an array
//it must be the last parameters

// and in spread operator:- The js iterate each array


function sum(x , y , z){
    return x + y + z;
}

const numbers = [20 , 30 ,40]

console.log(sum(...numbers));

console.log(sum(numbers));

console.log(...numbers);

const arr1 = [1,2,3]
const arr2 = [4,5,6]

console.log(...arr1,...arr2);

// [5,10,15] + undefined + undefined

// This results in NaN, because:

// The array tries to convert to primitive ("5,10,15")

// Then "5,10,15" + undefined becomes string concatenation

// Then further addition produces NaN

// The core point:
// Without spread, you pass one argument (an array).
// With spread, you pass three arguments.

// Outputs
// 10
// [ 20, 30, 40 ]
// 90
// 20,30,40undefinedundefined
// 20 30 40
// 1 2 3 4 5 6