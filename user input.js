// 1. How to accept user input
// 2. Easy way with a window prompt

// Difficult way html textbox
// Add this to the html file: 

//       <label id="myLabel">Enter your name:</label><br>
//       <input type="text" id="myText"><br>
//       <button type="button" id="myButton">Submit</button>

// Easy way: let username = window.prompt("What's your name?");
//           console.log(username);

let username;
document.getElementById("myButton").onclick = function(){
   username = document.getElementById("myText").value; // "myText" is the id of our textbox
   console.log(username);
document.getElementById("myLabel").innerHTML = "Hello" + username;   
}