/* Використовуючи властивості рядків (тип string), 
та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let word = "unbelievable"; 
const vowelRegex = /[aeiouAEIOU]/g; // adding 'g' would identify all of them 
const result = word.replace(vowelRegex, " ");
console.log(result); 

/*
//This will remove all consonant letters 

let sentence = "Fucking amazing";
const consonantRegex = /[^aeiouAEIOU]/g;
const result = sentence.replace(consonantRegex, " ");
console.log(result);

*/