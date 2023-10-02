// 2D arrays = an array of arrays 

//We are going to create a grocery shopping list 
// which will be made up of separate individual lists

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats]; // this is our two-dimensional array

// To iterate, we're going to use nested loops
// I would like to replace apples with mangoes

groceryList[0][0] = "mangoes"; // first row, first element within fruits array
groceryList[0][2] = "kiwis" // we have replaced bananas with kiwis

groceryList[2][0] = "steak"; // we have replaced eggs with steak
groceryList[2][2] = "beef"; // we have replaced fish with beef 

for(let list of groceryList){
    for(let food of list){
        console.log(food); // this will display all elements of my two-dimensional array
    }
}


/*
Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
   
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    for(let numbers of arr){
        for (let number of numbers){
            console.log(number);
        }
    }
*/
