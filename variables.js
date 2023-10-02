// A variable is a container for storing data
// A variable behaves as if it was a value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (=assignment operator)

// Data types 
// 15 - a number 
// "Bro" - a string
// true/false - booleans
// Numbers can be used with arithmetic expressions

let age = 21; // declaring a variable
let firstName = "Bro";
let student = true; 
//let age = "21" - this is a string and if you increment it by 1, it will add 1 to it 
age = age + 1; // incrementing age by 1

console.log("You are", age, "years old"); // displaying the variable
console.log("Hello", firstName);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;




