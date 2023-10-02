// ternary operator = shortcut for 'if/else statement' 
//                    Takes 3 operands

//       1. a condition with ?
//       2. expression if True :
//       3. expression if False 


// condition ? exprIfTrue : exprIfFalse

//Let's create a function that will check a user's age 
/* This is one way to write this
let adult = checkAge(21);
console.log(adult);

function checkAge(age){
    if(age>= 18){
        return true;
    }
    else{
        return false;
    }
}

// This is another way to write this with a lot less syntax 
// This will do the same thing

let adult = checkAge(12);
console.log(adult);

function checkAge(age){
   return age>= 18 ? true : false;
}
*/
// Maybe we're playing a game and we have to check to see
// ... if somebody won the game

checkWinner(false); // we can pass in a boolean, value or a variable
function checkWinner(win){
    win ? console.log("You win!") : console.log("You lost!");

}

