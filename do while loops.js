// do while loop = do something,
//                 then check the condition,
//                 repeat if condition is true

let userName = "";
do{
    userName = window.prompt("Enter your name");
} // we're executing this code first

while(userName == ""); // then we check the condition 

console.log("Hello ", userName);