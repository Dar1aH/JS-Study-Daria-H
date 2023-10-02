//Find the hypotenuse of a right angled triangle
/*
let a;
let b;
let c; 

a = window.prompt("Enter side a:");
a = Number(a); // converting the string to a number 

b = window.prompt("Enter side b:");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side c:", c);
*/

let a;
let b;
let c; 
document.getElementById("submitButton").onclick = function() { 
    // Taking the value of the textbox for side A and converting it to a number
    let a = Number(document.getElementById("aTextBox").value);
    
    // Taking the value of the textbox for side B and converting it to a number
    let b = Number(document.getElementById("bTextBox").value);

    // Calculating side C using the Pythagorean theorem
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    // Updating the innerHTML of the cLabel to display the value of side C
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
