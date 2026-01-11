/*Shallow Copy:
In JavaScript,when you assign an object or array to a new 
variable, it creates a shallow copy.This means that both variables now referance the same
memory location.*/
// Example:
let original = {
    a:1,
    b:2
};
let copy = original; //{a:1,b:2}
console.log(copy);

original.a = 3;
console.log(copy); //{a:3,b:2}

/*Deep Copy:
A deep copy creates a completely new,independent copy of the original
object or array */
// Example:
let original1 = {
    a:'a',
    b:'b'
};
let copy1 = JSON.parse(JSON.stringify(original1))
console.log(copy1);
original1.a = 1;
console.log(copy1);