
// Approach 1 using a standard for loop 
/*

// The output: 5 10 15 20 

let prices = [5, 10, 15, 20];
for(let i=0; i<prices.length; i+=1){
  console.log(prices[i]); // this will iterate and display the elements of my array 
}



//If you want to iterate backwards 
// The output: 20 15 10 5

let prices = [5, 10, 15, 20];
for(let i = prices.length - 1; i>=0; i-=1){
    console.log(prices[i]); 
}
*/ 

//An additional option 
/*
let prices = [5, 10, 15, 20];
for(let i of prices){
   console.log(i); // And this will also iterate over our array 
}
*/

//A better way of writing this is to use a word that is more 
// ... descriptive of our array

let prices = [5, 10, 15, 20];
for(let price of prices){
    console.log(price);
}
