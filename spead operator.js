// spread operator = allows an iterable such as an
// ...              array or string to be expanded 
//                  in places where 0 or more
//                  arguments are expected 
//                 (unpack the elements)

/*
let userName = "Daria H";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(...numbers); // this will display the numbers one after another 
console.log(...userName); // this will spread the string into individual characters


// I want to find the maximum value within the array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers);
console.log(maximum);

*/

// We have 2 classes of students and we want to merge them into 1 class 

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(...class2); // we have merged 2 classes
console.log(...class1); // class1 is divided into individual elements 

