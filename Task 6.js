/*
Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/


let DayOfTheWeek = 5;

const checkDayOfTheWeek = DayOfTheWeek =>{
    console.log(DayOfTheWeek == 1 ? "Oh no, it's Monday again" :
    DayOfTheWeek == 2 ? "Today is Tuesday:( I wish it was Friday!" :
    DayOfTheWeek == 3 ? "It's Wednesday, we're half way through" :
    DayOfTheWeek == 4 ? "It's Thursday! We're almost there!" :
    DayOfTheWeek == 5 ? "It's Friday again:) Let's party!" :
    DayOfTheWeek == 6 ? "It's Saturday! Let's relax!" :
    DayOfTheWeek == 7 ? "It's Sunday! Let's get ready for the week:(" :
    "Wrong input value");
}
checkDayOfTheWeek(DayOfTheWeek);

