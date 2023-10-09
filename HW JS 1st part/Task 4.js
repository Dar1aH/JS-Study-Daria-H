/*
За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

printSeason(2); // Enter numbers from 1 - 4 here 
function printSeason(seasonNumber){
    if(seasonNumber == 1){
        console.log("Winter");
    }
    else if(seasonNumber == 2){
        console.log("Spring");
    }
    else if(seasonNumber == 3){
        console.log("Summer");
    }
    else if(seasonNumber == 4){
        console.log("Fall");
    }
    else{
        console.log("Wrong season number, dummy!");
    }
}