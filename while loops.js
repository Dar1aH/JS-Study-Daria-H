// while loop = repeat some code 
//             while some condition is true
//             potentially infinite 

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
 // once you reach the end of the code, you check the condition again
}
console.log("Hello ", userName);