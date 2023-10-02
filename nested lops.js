//nested loop - a loop inside of another loop
/*
for (let i=1; i<=3; i+=1){ // this counts up to 3
    console.log(i); // during each iteration we will display the value of i
}

// I want to put another for loop inside of the existing one
// we need another counter besides i, so we need j, because it comes after i in the alphabet
// Once we've completed all 3 iterations of the nested loop, we will complete 1 iteration of the outer loop 
// If we change i<=2, we will repeat the inner loop twice

for(let i=1; i<=3; i+=1){
    for (let j=1; j<=3; j+=1){ 
        console.log(j);
    }
}
*/
// Let's use a nested loop to draw a rectangle within our DOM 
// The outer loop will be in charge of the rows 
// The inner loop will be in charge of the columns
// You need an html element to work with, so within your html file, write this:
// within the <body> tags  
// <label id="myRectangle"></label>

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for(let i=1; i<=rows; i+=1){
    for(let j=1; j<=columns; j+=1){
       document.getElementById("myRectangle").innerHTML += symbol; // the inner for loop will print one row
    }
    document.getElementById("myRectangle").innerHTML += "<br>"; 
}
