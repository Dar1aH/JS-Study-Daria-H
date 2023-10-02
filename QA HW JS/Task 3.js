/*
Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.


// a) 

let price = 1200;

if(!(price>=1000 && price<=1900)){
    console.log("This is a valid input");
}
else{
    console.log("This is an invalid input");
}


// b)

let price = 1950;
switch(true){
    case price<1000:
        console.log("This is a valid input");
    break;
    case price>=1000 && price<=1900:
        console.log("This is an invalid input");
    break;
    case price>1900:
        console.log("This is a valid input");
    break;            
}
*/
// b)
let price = "Snoop Dog";

if(price<1000){
    console.log("This is a valid input");
}
else if(price>=1000 && price<=1900){
    console.log("This is an invalid input");
}
else if(price>1900){
    console.log("This is a valid input");
}
else{
    console.log(price, " is not a number");
}
