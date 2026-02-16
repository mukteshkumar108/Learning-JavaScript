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

// and in spread operator:- The js iterate each arra