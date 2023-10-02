/*
Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
// 1km = 1000m --> multiply the length value by 1000
// meters --> kilometers --> divide the length value by 1000

/* The logic behind the program

let length = 50;

length = toMeters(length); // instead of 'toMeters' you can change 'toKilometers' which will invoke the first function
console.log(length); 

function toKilometers(length){
     return(length / 1000);
}

function toMeters(length){
    return(length * 1000);

} */

// Let's include if - else if 
// And write a program that will covert meters to kilometers only 

let length = 5000;
if (length >= 1000){
    console.log(toKilometers(length) + " km");
}
else if(length < 1000){
    console.log(toKilometers(length).toFixed(3) + " km"); // + 3 decimal places 
}
function toKilometers(length){
    return length / 1000;
}
