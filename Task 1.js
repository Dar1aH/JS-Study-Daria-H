
/* Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

// This is my creation 

let hamburger = 6;
let HamburgerWithFries = 0; 

function checkFood(hamburger, HamburgerWithFries){
    hamburger >= 3 && HamburgerWithFries >= 1 ? 
    console.log ("We have eaten! Yummy!") :
    console.log("We're going to another restaurant! F*ck this place!");
}
checkFood(hamburger, HamburgerWithFries);



// This is Chat GPT's 
/*
let hamburger = 10;
let HamburgerWithFries = 3; 

const checkFood = (hamburger, HamburgerWithFries) =>
console.log(hamburger >=3 && HamburgerWithFries >=1 ?
    "We have eaten! Yummy!" : 
    "We're going to another restaurant! F*ck this place!" );

checkFood(hamburger, HamburgerWithFries);
*/
