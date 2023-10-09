/*
Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.


let a = 23; // Change the numbers (a, b, c) here :) 
let b = 45; // No, I didn't use Chat GPT:) 
let c = 19; // Yes, I wrote this myself! Awesome, right:) 
a !== b;
b !== c;
c !== a; 
printNumber(a,b,c);
function printNumber(a,b,c){
    if((a>b && a<c) || (a>c && a<b)){
        console.log(a);
    }
    else if((b>a && b<c) || (b>c && b<a)){
        console.log(b);
    }
    else if((c>a && c<b) || (c>b && c<a)){
        console.log(c);
    }
    else{
        console.log("Invalid input");
    }
}
*/
let a = 10, b = 50, c =30;
let avg;
if (a > b){
    if(a < c){
        avg = a;
    } 
else{
    if (b > c){
        avg = b;
    }
else{
       avg = c;
} 
 } 
  }
else {
    if(b < c){
        avg = b;
    }
    else{
        if(a > c){
            avg = a;
        }
    else{
        avg = c;
    }
  }
}
console.log(avg); 



