function myFunc(theObject){
    theObject.make = "Toyota";
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(myCar.make); //Honda
myFunc(myCar);
console.log(myCar.make); //Toyota

function change(X){
    x = 10;
}

let a = 5;
change(a);

console.log(a)

//-------------------------------------------

const user = {
  name: "Amit",
  city: "Delhi",
  isActive: true // good approach makes debugging faster and 
                 // other dev to uderstand how object is created fater.
};

// adding property later
// user.isActive = true; // bad approach while making a new object


