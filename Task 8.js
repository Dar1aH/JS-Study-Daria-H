/*
Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.
*/

let myArray = [];

const pushToMyArray = (... numbers) => myArray.push(... numbers);

pushToMyArray(1, 2, 3, 4, 5);
console.log(myArray);