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

