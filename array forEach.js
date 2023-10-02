// array forEach() = executes a provided callback function
//                  once for each array element 

// We will create a function that will capitalize the first letter of each string

let students = ["spongebob", "patrick", "squidward"];
// To use the forEach() method
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    // element[0] - is the first letter within the string
        array[index] = element[0].toUpperCase() + element.substring(1); 
}
//console.log(students[0]); // This will display the first Student 

// I want to print each student with capitalized first letters

function print(element){
    console.log(element);
}
