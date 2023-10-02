// return = returns a value to a place 
//         where you invoke a function

// We are creating a program to calculate the area of a rectangle 
// ... using a function and then return the value

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");
area = getArea(width, height); // we need to pass in a matching set of arguments

console.log("The area is:", area);

function getArea(width, height){
 /* let result = width * height;
  return result;
  */
 // The following will do the same the the previous two lines of code
 return width * height;
}

