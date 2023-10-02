// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true --> false, false --> true

let temp = -15;
let sunny = false;

if(!(temp>0)){ // we're checking if our temperature is not >0 
    console.log("It's cold outside!");
}
else{
    console.log("It's warm outside");
}

if(!sunny){ // we're checking if it's not sunny
    console.log("It's cloudy")
}
else{
    console.log("It's sunny outside")
}
