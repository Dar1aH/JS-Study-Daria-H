/*
За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/


seasonNumber = 1;
const printSeason = seasonNumber =>{
    console.log(seasonNumber==1 ? "Winter" :
    seasonNumber==2 ? "Spring" :
    seasonNumber==3 ? "Summer" : 
    seasonNumber==4 ? "Fall": "Such a season doesn't exist" );
}
printSeason(seasonNumber);

