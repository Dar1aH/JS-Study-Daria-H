/* 9. Напишіть 2 цикли.
За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
*/


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PrintEvenNumbers = (numbers) =>{
  numbers.filter(number => number % 2 == 0).forEach(evenNum => console.log(evenNum));
}
PrintEvenNumbers(numbers);

const PrintOddNumbers = (numbers) =>{
    numbers.filter(number => number % 2 == 1).forEach(oddNum => console.log(oddNum));
}
PrintOddNumbers(numbers);

