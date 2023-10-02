/*
Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.


let numbers = [1, 2, 3, 4, 5];
for(let number of numbers){
    console.log(number);
}

// Also possible like this

let numbers = [1, 2, 3, 4, 5];
for(let i=0; i<numbers.length; i+=1){
    console.log(numbers[i]);
}



let myArray = [1, 2, 3, 4, 5];
for(let number of myArray){
    console.log(number);
}
*/

let array = []; 

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5; 

array.push(num1, num2, num3, num4, num5);
console.log(array);