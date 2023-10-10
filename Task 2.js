/*
Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

*/

let price = "Slava Ukraini";

const checkPrice = price => console.log(price<100 || price>1900 ? 
    "This is invalid input" : price>=1000 && price<=1900 ?
    "This is valid input" : `${price} is not a number` );
    checkPrice(price); 


