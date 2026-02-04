//Higher Order Functions and Callback

//Higher order function wo hota hai jo function ko arguement ke form mein accept kare ya function ko return kare

function add(a, b, cb){ // a, b, c are parameters which are always defined in a function declaration to receive values like temporary variable
    let result = a + b 
    cb(result) //result is 
}

add(2, 4, function (val){ //2, 4, function(val){...} are arguements
    console.log(val);
}) 