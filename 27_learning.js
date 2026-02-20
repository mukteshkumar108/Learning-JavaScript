// rguments ek special object hota hai jo har normal (non-arrow) function ke
// andar automatically available hota hai. Iska kaam hai function ko pass kiye 
// gaye saare parameters ko hold karna — chahe tumne formally parameters define 
// kiye ho ya nahi.
function sum() {
  console.log(arguments);
}

sum(10, 20, 30);