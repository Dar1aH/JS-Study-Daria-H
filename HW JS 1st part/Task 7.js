/*
За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let a = 23; // Change the numbers here
let b = 5;  // to see different outputs 

let result;

switch('+'){
    case '+':
        result = a + b;
        console.log(result);
    break;    
}
switch('-'){
    case ('-'):
        result = a - b;
        console.log(result);
    break;        
}
switch('*'){
    case '*':
        result = a * b;
        console.log(result);
    break;

}
switch('/'){
    case '/':
        result = a / b;
        console.log(result);
    break;    
}        
