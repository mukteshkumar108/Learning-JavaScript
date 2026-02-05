//Higher Order Functions and Callback

//Higher order function wo hota hai jo function ko arguement ke form mein accept kare ya function ko return kare

function add(a, b, cb){ // a, b, c are parameters which are always defined in a function declaration to receive values like temporary variable
    let result = a + b 
    cb(result) //result is 
}

add(2, 4, function (val){ //2, 4, function(val){...} are arguements
    console.log(val);
}) 

// There are two ways in which the callback may be called: synchronous and asynchronous.

let value = 1;

let doSomething = (() => {
  value = 2;
});

console.log(value);

/*
## 🏗️ Understanding Callbacks: The Foundation of JS Execution

In JavaScript, a **callback** is a function passed as an argument to another function (the "caller"). This pattern represents **Inversion of Control**: instead of you executing the function immediately, you hand it over to the API and say, "Here is a task; you run it when you are ready." The caller is responsible for executing the function and providing any necessary data (arguments) it requires.

### The Two Modes of Execution

Understanding the timing of these callbacks is critical for managing "Side Effects" (like updating variables or UI).

#### 1. Synchronous Callbacks (Blocking)

These are executed **immediately** within the same "tick" of the event loop. The code execution waits for the callback to finish before moving to the next line.

* **Behavior:** It follows a straight line. If the callback takes 5 seconds, the whole app freezes for 5 seconds.
* **Common Examples:** Functional array methods like `Array.prototype.map()`, `filter()`, or `forEach()`.
* **Side Effect Rule:** Any changes made inside the callback are available immediately on the very next line of code.

#### 2. Asynchronous Callbacks (Non-Blocking)

These are executed **later**, after an external operation (like a timer, file read, or API call) finishes. The JavaScript engine moves the callback to a "Task Queue" and continues running the rest of the script first.

* **Behavior:** It allows the program to remain responsive. The main script finishes, and only then does the Event Loop pick up the callback from the queue.
* **Common Examples:** `setTimeout()`, `addEventListener()`, or `Promise.then()`.
* **Side Effect Rule:** You cannot rely on changes made inside an async callback immediately after the function call. The "future" code must be handled inside the callback or via Promises/Async-Await.

> **Note to Future Self:** Always check if an API is sync or async before trusting the state of your variables. If you treat an async callback like a sync one, you will end up with `undefined` or stale data because you're trying to read the result before it has actually been calculated.
*/