// Type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");
console.log(typeof age); // this is a string
age = Number(age); // this will convert a number to a string
age += 1;

console.log("Happy Birthday! You are", age, "years old!");
*/

let x;
let y;
let z;

x = Number("3.14"); // a string
y = String(3.14); // a number
z = Boolean(""); //  converting an empty string into a boolean will result in 'false'

console.log(x, typeof x);
console.log(y, typeof y); // this is now a string 
console.log(z, typeof z);

