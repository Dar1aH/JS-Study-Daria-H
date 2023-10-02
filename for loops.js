// 'for loop' = repeat some code a
//           certain amount of times
// They are used when you want to repeat code a limited amount of times 

// 'while loops' are better suited for something that can be executed an infinite amount of times


// We're creating a program that will be able to count to 10 

/*
for(let counter = 1; counter <=10; counter+=1){ 
    // this will start from 1 and will continue until the counter variable <=10
    // we also need to increment our counter by 1
    console.log(counter);
}


// This will be able to count to 100

for(let counter =1; counter <=100; counter+=1){
    console.log(counter);
}


// If I want the program to start count from 50 to 200
// 'counter' is a local variable which in this case doesn't exist outside of this 'for loop'

for(let counter=50; counter <=200; counter+=1){
    console.log(counter);
}


// 'counter' can be replaced with 'i' 
for(i=10; i<=50; i+=1){
    console.log(i);
}


// Let's say we want to count down to New Years day, for example
// This will count down from 10 to 1
// We can increment or decrement our counter/i

for(i=10; i>0; i-=1){
    console.log(i);
}
console.log("Happy New Year!");

*/

// We can count down by 2 or even 3 (not 1)

for(i=10; i>0; i-=2){
    console.log(i);
}
console.log("Happy New Year!");

