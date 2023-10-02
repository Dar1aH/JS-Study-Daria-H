// callback = a function passed as an argument
//            to another function

// Ensures that a function is not going
// to run before a task is completed
// Helps us develop asynchronous code
//(When one function has to wait for another function)
// that helps us avoid errors and potential problems
// Ex. Wait for a file to load


// Let's say we need to add 2 numbers together 
// One way of writing this
/*
let total = sum(2, 3);
//displayConsole(total);
displayDOM(total);

function sum(x, y){ // we need to add 2 matching parameters to these arguments like x and y
  let result = x + y;
  return result;
}
function displayConsole(output){
      console.log(output);
}
// Let's create some function to display some output to the DOM

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
// Add this to the HTML file within the body tag
// <label id="myLabel"></label>

*/
// Another way of writing this using callback function

sum(2, 3, displayDOM); // we have to arguments to add and a callback

function sum(x, y, callBack){
   let result = x + y;
   callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}
