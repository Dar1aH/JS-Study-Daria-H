// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions 

// Maybe we're working on a page for an online store

let userName = "Daria";
let items = 3;
let total = 75; 

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

// Using `` we can embed a variable or expresion within a string
/*

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is ${total}`);

*/

// What if we would like to display one very long string

let text = `Hello ${userName}<br>
            You have ${items} items in your cart<br>
            Your total is ${total}<br>`;
//console.log(text); 

document.getElementById("myLabel").innerHTML = text;