/* 9. Напишіть 2 цикли.
За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.

// Even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let number of numbers){
    if(number % 2 == 0){
        console.log(number);
    }
}
*/
// Odd numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let number of numbers){
    if(number % 2 == 1){
        console.log(number);
    }
}
