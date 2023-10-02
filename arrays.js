// array = think of it as a variable
//        that can store multiple values

           //   0         1          2
let fruits = ["apple", "orange", "banana"];
// This will display the whole array
//console.log(fruits);

// Access a particular element within the array
//console.log(fruits[1]); // this will display orange 

// You can also update and change the elements within an array

//fruits[0] = "coconut"; // this was an apple initially 

//fruits[1] = "coconut"; // this will replace the orange with a coconut

// You can add an element to the array using the push method
fruits.push("lemon"); // this will add an element 

// We can remove last element
fruits.pop()

// This will add an element to the beginning of an array
fruits.unshift("mango");  

// This will remove the beginning element
fruits.shift(); 

let length = fruits.length; // this will display the length of the array
console.log(fruits);
// You can find an index of an element

let index = fruits.indexOf("orange");
console.log(index); // this will display the index of apple 

