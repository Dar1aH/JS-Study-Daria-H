// break = breaks out of the loop entirely
// continue = skip an iteration of a loop

// We will count the numbers from 1 to 20. Once we've reached 13, we will break the loop
// because it's unlucky number let's say 

// With 'break'
/*
for(i=1; i<=20; i+=1){
    if(i == 13){
        break; // This will count from 1 to 12 and break
    }
    console.log(i);
}
*/
// With 'continue'

for(i=1; i<=20; i+=1){
    if(i == 13){
        continue; // This will count from 1 to 12, skip 13 and will continue counting to 20
                  // it will literally skip 1 iteration 
    }
    console.log(i);
}
