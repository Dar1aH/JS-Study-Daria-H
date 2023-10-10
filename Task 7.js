/*
За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

*/


let a = 10; 
let b = 5; 

const sum = (a,b) =>{
    return a + b
}
console.log(`${sum(a,b)}`);

const subtract = (a,b) =>{
    return a - b
}
console.log(`${subtract(a,b)}`);

const multiply = (a,b) =>{
    return a * b
}
console.log(`${multiply(a,b)}`);

const divide = (a,b) =>{
    return a / b
}
console.log(`${divide(a,b)}`);

