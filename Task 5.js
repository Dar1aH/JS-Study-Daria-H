/*
Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/


let a = 80, b = 10, c =30;

const median = (a, b, c) =>{
    console.log( (a>b && a<c) || (a>c && a<b) ? `${a} is the median of the numbers` :
               (b>a && b<c) || (b>c && b<a) ? `${b} is the median of the numbers`:
               (c>a && c<b) || (c>b && c<a) ? `${c} is the median of the numbers` :
               "Invalid input");
}
median(a, b, c); 

