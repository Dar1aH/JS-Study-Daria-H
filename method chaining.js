// calling one method after another in one
// continuous line of code 
/*
let userName = "Daria";
let letter = userName.charAt(0);
letter = letter.toUpperCase();

console.log(letter);
*/
// To write the code above more elegantly, we could use the method chaining 

let userName = "Daria";
let letter = userName.charAt(0).toUpperCase().trim(); // we're calling one method after another in one continuous line of code
console.log(letter);

