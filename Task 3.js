/*
Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.


// a) 

let price = "Kim Kardashian"; 

const checkPrice = price => {
    if(typeof price !== 'number'){
        console.log(`${price} is not a number`);
    return
    }
console.log(!(price>=1000 && price<=1900) ? "This is valid input" : "This is invalid input");    
}

checkPrice(price);
*/

//b)

let price = "Patrick";

const checkPrice = price => {
    if(typeof price == 'string'){
        console.log(`${price} is not a number`);
        return
    }
console.log(price<1000 || price>1900 ? "This is valid input" :
"This is invalid input");     
}

checkPrice(price); 