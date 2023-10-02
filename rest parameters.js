// rest parameters = represents an idefinite number
// ...               of parameters
//                   packs numbers into an array
/*
let a = 1;
let b = 2;
let c = 3; 
let d = 4;
let e = 5;

//This is not practical

console.log(sum(a, b, c, d));

function sum(a, b){
    return a + b;
}

function sum(a, b, c){
    return a + b + c;
}

function sum(a, b, c, d){
    return a + b + c + d;
}


console.log(sum(a, b, c, d, e)); // we can pass an infinite number of arguments here
function sum(...numbers){
      let total = 0;
      for(let number of numbers){
          total += number
      }
      return total;
}

*/
const myArr = [2, 3, 4, 5, 6];
function sum(...myArr){
    let total = 0;
    for(let number of myArr){
        total +=number
    }
    return total;
    
}
console.log(sum(...myArr));


