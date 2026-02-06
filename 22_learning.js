// In JavaScript, a Promise represents the eventual result of an asynchronous operation. It is a state machine with deterministic transitions. You do not “get” the value immediately; you attach behavior that runs when the value becomes available ⏳.

// A Promise has three states:
// pending → initial state
// fulfilled → operation completed successfully
// rejected → operation failed

// Once settled (fulfilled or rejected), the state is immutable.

const promise = new Promise((resolve, reject) => {
  // async work
  const success = true;

  if (success) resolve("Done");
  else reject("Error");
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Always runs");
  });

// .then() handles fulfillment, .catch() handles rejection, .finally() runs regardless.

// Promise chaining (core concept)
// Each .then() returns a new Promise. This allows sequential async logic without nesting.
