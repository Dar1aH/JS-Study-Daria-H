// Gives us the ability to check more than one condition concurrently
// && AND (BOTH conditions must be true)
//|| (Either condition can be true)

// && - both conditions must be true
/*
let temp = 15;
if(temp > 0 && temp < 30){
  console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}
*/
// || - either condition must be true
/*
let temp = -12;
if(temp <=0 || temp >=30){
    console.log("The weahter is bad!");
}
else{
    console.log("The weather is good!");
}
*/
let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
  console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}