// const = a variable that can't be changed

// We're going to calculate the circumference of a circle 
// This is the formula C=2πr 

const PI = 3.14159; // with constants all of the letters should be uppercase
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle"); 
// It's a string, we need to convert this into a number 

radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);
