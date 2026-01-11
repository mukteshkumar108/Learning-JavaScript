let username = 'Bhondu'// = 'Muktesh'
let userAge = 20// = 25

// Set default values if user doesn't enter any name or age
if (!username) {
    username = 'Muktesh';
}
if (!userAge) {
    userAge = 20;
}

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 18 && userAge <= 24) {
    console.log('He is a College student.');
}
if(userAge >= 25 && userAge <= 45){
    console.log('He is Working professional');
}


