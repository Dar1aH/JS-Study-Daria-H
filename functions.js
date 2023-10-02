// function = Define code once, and use it many times
//            To perform some code, call the function first 

// I want to write "Happy birthday" and print it 3 times
// We don't like to repeat code if we don't have to 

startProgram();
function startProgram(){
    let userName = "Daria";
    let age = 33; 
 // this will envoke call the function
 // you have to send the arguments within the function so the outer function  uderstands them
happyBirthday(userName, age); 
}
 // this will envoke call the function

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old");
}
// Functions have access to global variables
// A global variable is a variable that's declared outside of any functions
// ... or any set of curly braces 



