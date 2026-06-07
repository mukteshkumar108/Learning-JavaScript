// Arrow function => Function ko likhne ka short and moder style

//Template literal => Function ke andar variable dalne ka clean way

const M = "Muktesh";

const message = "Hello " +  M + ", Apka din kaisa hai?"; //old way

console.log(message);

const backticks = "backtick ``";

const message1 = `Here we will use ${backticks}`;

console.log(message1);

let userName = {
    name : "Muktesh",
    rollNumber : 25,
    class : "Special grade",
}

console.log(userName.name);

// const { name, age } = user;
const user = {
    name : "Akaash",
    state: "Bihar",
    country: "India",
    age: 21,
}
const { name, age } = user;

console.log({ name, age});

const ashramGang = ['PanMasala', 'Muktesh', 'EveningHandsome', 'Rand1', 'Rand2','Playboi'];

const [first, ,third] = ashramGang;

console.log([first,third]);

