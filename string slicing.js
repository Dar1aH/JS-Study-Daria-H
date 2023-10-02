


// slice() extracts a section of a string 
//        and returns it as a new string, 
//        without modifying the original string 

let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

// Here, we're searching the the index of any spaces 
firstName = fullName.slice(0, fullName.indexOf(" ")); // we're taking the first letter and will end where there's a space 
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
