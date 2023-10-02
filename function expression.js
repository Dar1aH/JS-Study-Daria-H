// function expression = function without a name(anonymous function)
//                       avoid polluting the global scope with names
//                       write it and then forget about it 

// This can be tedious to come up with names
/*
sayHello();
function sayHello(){
    console.log("Hello!");
}
// Another ways of writing this 

const greeting = function(){
    console.log("Hello!");
}
greeting(); // we invoke the function here 
*/

// Without using function expression
//Add this to your HTML file 
/*
<label id="myLabel">0</label><br>
    <button id="decreasebutton" >Decrease</button>
    <button id="increasebutton" >Increase</button>
*/
    
let count = 0;
document.getElementById("increaseButton").onclick = function(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count; 
}
document.getElementById("decreaseButton").onclick = function(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count; 
}


/*
function increaseCount(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count; 
}
function decreaseCount(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count; 
}
// Add this to your HTML file 

    <label id="myLabel">0</label><br>
    <button id="decreasebutton" onclick="decreaseCount()">Decrease</button>
    <button id="increasebutton" onclick="increaseCount()">Increase</button>
*/