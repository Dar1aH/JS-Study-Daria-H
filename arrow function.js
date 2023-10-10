// arrow function = compact alternative to a traditional function 
//       =>

//Traditional way
/*
const greeting = function(userName){
    console.log(`hello ${userName}`);
}

greeting("Daria");


//Using arrow function 

// If you have one argument, you don't need a set of parenthesis 

// const greeting = userName => console.log(`hello ${userName}`);
//const greeting = (userName) => console.log(`hello ${userName}`);

// if you have two arguments, you need a set of parenthesis 

const greeting = (userName, age) => console.log(`hello ${userName} you are ${age} years old`);

greeting("Daria", 33);


const percent = function(x, y){
    return x / y * 100;

}
console.log(`${percent(80, 150)}%`);



// Let's use the arrow function in place of a function expression

const percent = (x, y) => x/y *100; 

console.log(`${percent(25, 70)}%`);
*/

// Let's sort an array of integers 

let grades = [100, 50, 90, 60, 80, 70];

// If we were to use standard functions it would be like this: 

grades.sort(ascending);
grades.forEach(print);

function ascending(x, y){
     return x - y; 
}
function print(element){
    console.log(element);
}
