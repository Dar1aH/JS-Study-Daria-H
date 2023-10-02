/*
Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
   */
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    for(let numbers of arr){
        for (let number of numbers){
            console.log(number);
        }
    }

