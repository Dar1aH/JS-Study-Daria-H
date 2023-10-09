/*
Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let DayOfTheWeek = 1;
switch(true){
    case DayOfTheWeek == 1:
        console.log("Oh no, it's Monday again");
        break;
    case DayOfTheWeek == 2:
        console.log("Today is Tuesday:( I wish it was Friday!");
        break;
    case DayOfTheWeek == 3:
        console.log("It's Wednesday, we're half way through");
        break;
    case DayOfTheWeek == 4:
        console.log("It's Thursday! We're almost there!");
        break;
    case DayOfTheWeek == 5:
        console.log("It's Friday again:) Let's party!");
        break;
    case DayOfTheWeek == 6:
        console.log("It's Saturday! Let's relax!");
        break;
    case DayOfTheWeek == 7:
        console.log("It's Sunday! Let's get ready for the week");
        break;
    default:
        console.log(DayOfTheWeek, "is the wrong number")                            
}    