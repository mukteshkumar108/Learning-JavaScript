/* 
1. Js pushes setTimeout to call stack 
2. Browser takes timer responsiblity
3. Timer runs outside JS engine
4. After 2 sec -> callback goes to callback queue
5. Event loop checks stack
6. If stack empty -> callback pushed to stack

JS engine never tracks time. The browser does
*/


console.log("Start");

setTimeout(() => {
    console.log("Inside timeout");
}, 2000);

console.log("End");

/* 2. setInterval: Same as settimeout but it runs in loop*/

let count = 0;

const id = setInterval(() =>{
    count++;
    console.log("Tick", count);

    if (count === 100){
        clearInterval(id);
    }
}, 1000);

/* 3️. Understanding execution order (Event Loop basics)*/

console.log("Script Start");

setTimeout(() => {
    console.log("Timeout callback executed");
}, 0);

console.log("Script End");

/* 4. Microtask Queue vs Callback Queue */


console.log("Microtask example start");

setTimeout(() => {
    console.log("Timeout task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise microtask");
});

console.log("Microtask example end");