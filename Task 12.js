
/*Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54
*/
    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;
     
    // тут має бути ваше рішення
    arr.forEach(subArr =>{
        subArr.forEach(number =>{
            product *= number;
        });
    });

    console.log(product);

