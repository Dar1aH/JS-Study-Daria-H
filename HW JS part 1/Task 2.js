/*
Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.


let price = 1400;
switch(true){
    case price<1000:
        console.log("This is an invalid input");
        break;
    case price>=1000 && price<=1900:
        console.log("This is a valid input");
        break;
    case price>1900:
        console.log("This is an invalid input");           
}
*/
let price = 500; 
if(price<1000){
    console.log("This is an invalid input");
}
else if(price >=1000 && price <=1900){
    console.log("This is a valid input");
}
else if(price > 1900){
    console.log("This is an invalid input");
}
else{
    console.log(price, " is not a number"); 
}
