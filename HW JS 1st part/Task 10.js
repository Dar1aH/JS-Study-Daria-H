/*
Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];

const myArr = [2, 3, 4, 5, 6];
function sum(...myArr){
    let total = 0;
    for(let number of myArr){
        total +=number
    }
    return total;
    
}
console.log(sum(...myArr));
*/ 
// Same logic using for loop ONLY 

const myArr = [2, 3, 4, 5, 6];

let total = 0; 
for(let number of myArr){
    total +=number;
}
console.log(total);

