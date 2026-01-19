//Basic syntax

function f(a,b){ // a and b in parameters are called arguements
    // console.log(a + b); //Writting the logic in the function body
    return(a + b); // use return keyword to return a result if you dont use it 
    //js engine will show result and undefined
}

console.log(f(34,56));

// Anonymous functions

// let sum = function(a,b){
//     return(a + b);
// }

// console.log(sum(4,90));

//Functions with functions

function oneMoreFunction(){
    return sum;
    function sum(a,b){
        return (a+b);
    }
}

let sum = oneMoreFunction()

console.log(sum(4,5));

