let username = 'Bhondu'// = 'Muktesh'
let userAge = 20// = 25

// // Set default values if user doesn't enter any name or age
// if (!username) {
//     username = 'Muktesh';
// }
// if (!userAge) {
//     userAge = 20;
// }

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a College student.`);
// }
// if(userAge >= 25 && userAge <= 45){
//     console.log(`${username} is Working professional.`);
// }

// let username = 'Muktesh';
// let userAge = 20;

if (!username) {
    username = 'Muktesh';
}
if (!userAge) {
    userAge = 20;
}

// If-Else ladder for age categorization
if (userAge < 18) {
    console.log(`${username} is a School student.`);
}
else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a College student.`);
}
else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a Working professional.`);
}
else {
    console.log(`${username} is Retired.`);
}

console.log(`He/She age is ${userAge}`);
