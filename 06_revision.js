// Variable declarations

console.log(a); // undefined

var a = "Anamika";

a = "Archna"; // var can be reassigned

console.log(a); // "Archna"

{
    var b = 5; 
}

console.log(b); //its function scoped 

// do not use Var keyword for declaring a variable

// console.log(c); //this will throw an error cause let cannot be acessed before its initialisation
let khaali //variable declare kardiya aur initialise bhi nhi kiya HAHAHAHA!!!!!

let c = 34;

c = 'Muku bhai'; // value reasssigned and can be of differnet data type just like var keyword

console.log(c); // 'Muku bhai'

const pi = 3.14; // iski value nhi change hoyegi joh marzi karlo

// pi = 3.27 

console.log(pi); // compiler ne 2 gaali di ki nhi yeh allowed nhi value update karna

// const ko toh khaali bhi nhi chodh sakte mtlb value initialise karni padhegi iske saath
// varna error dega






