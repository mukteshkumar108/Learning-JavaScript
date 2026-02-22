
// const userProfile = {

//     userName: 'adarsh',

//     email: 'adarsh@example.com',

//     age: 17,

//     country: 'India'

// };

// //Use object destructuring to extract the username and email properties from the userProfile object.

// const { userName: name, email: userEmail } = userProfile;

// const user1 = userProfile;

// console.log(`Username: ${username}, Email: ${email}`);

// console.log(user1);

const userProfile = {
    userName: 'adarsh',
    email: 'adarsh@example.com',
    age: 17,
    country: 'India'
};

// 1. Destructure using the correct property names
// We use 'property: alias' to rename them if we want
const { userName: name, email: userEmail } = userProfile;

// 2. Reference the correct object
const user1 = userProfile;

// Now these will work!
console.log(`Username: ${name}, Email: ${userEmail}`); 
console.log(user1);