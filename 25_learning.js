// Inspecting Objects
// With the method Object.keys() you can inspect object properties.
// Using Object.keys() is a simple example of metaprogramming.

const user = {
    name: "Muktesh",
    age: 20,
    education: "12th pass,BCA dropout"
}

const myArr = Object.keys(user);

console.log(myArr);

//modify object behaviour

Object.defineProperty(user, "name", {
    get() { return "secret"; }
});

let name = user.name;

console.log(name); //secret
























