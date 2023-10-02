// useful string properties and methods 
            // 0 1 2
let userName = "Bro Code";
let phoneNumber = "123-456-789";

//console.log(userName.length); // it will display the length of the value within the string 

 // This will display the first character within the string 
//console.log(userName.charAt(0));

//console.log(userName.charAt(1)); // This will display the second letter within the string 

//console.log(userName.indexOf("o")); // This will display the index of the first occurence of the letter O

//console.log(userName.lastIndexOf("o")); // The last occurence of "o" has an index of 5 

//userName = userName.trim(); // This gets rid of empty spaces before and after characters 
//userName = userName.toUpperCase(); // We can make username uppercase 
//userName = userName.toLowerCase();

//Let's say I want to replace all of the dashes with a /
// If you want to eliminate those dashes, just leave " " blank

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

