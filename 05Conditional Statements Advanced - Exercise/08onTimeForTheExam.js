function inTimeForExam(input) {

    let startHour = Number(input[0]);
    let startMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    // превръщаме ги в минути
    let startTotal = (startHour * 60) + startMinutes;
    let arrivalTotal = (arrivalHour * 60) + arrivalMinutes;

    //изчисляваме разликата между двете времена като абсолютна стойност
    let differenceTotal = Math.abs(startTotal - arrivalTotal);

    //превръщаме тази разлика в часове и минути, които ще ни трябват за печата:
    let hoursDiffer = Math.floor(differenceTotal / 60);
    let minutesDiffer = differenceTotal % 60;

    //проверяваме дали е закъснял: (сравняваме времето в минути)
    if (arrivalTotal > startTotal) {
        console.log('Late');

        //ако няма часове в разликата, а само минути - отпечатваме само тях
        if (hoursDiffer === 0) {
            console.log(`${minutesDiffer} minutes after the start`);

            //иначе има часове, ще ги отпечатим, но първо проверяваме дали ни трябва водеща нула за минутите
        }
        else if (minutesDiffer < 10) {
            console.log(`${hoursDiffer}:0${minutesDiffer} minutes after the start`);
        }
        else //печат без водеща нула
            console.log(`${hoursDiffer}:${minutesDiffer} minutes after the start`);
    }
    // ако е дошъл на време, т.е. до 30 минути по-рано печатим On time: else-
    if (arrivalTotal <= startTotal && arrivalTotal >= startTotal - 30) {
        console.log('On time');

        // ако е дошъл в точния час, тогава разликата в минути е 0; нищо не се отпечатва
        // ако има разлика, ще я отпечатим
        if (minutesDiffer != 0) {
            console.log(`${minutesDiffer} minutes before the start`);
        }
    }

    // тук вече остана възможността да е пристигнал по-рано
    else if (arrivalTotal < startTotal) {
        console.log('Early');

        // трябват ни същите проверки за печат като от ред 24 до 33
        if (hoursDiffer === 0) {
            console.log(`${minutesDiffer} minutes before the start`);

            //иначе има часове, ще ги отпечатим, но първо проверяваме дали ни трябва водеща нула за минутите
        }
        else if (minutesDiffer < 10) {
            console.log(`${hoursDiffer}:0${minutesDiffer} minutes before the start`);
        }
        else //печат без водеща нула
            console.log(`${hoursDiffer}:${minutesDiffer} minutes before the start`);
    }
}

inTimeForExam(["11", "30", "12", "29"]);
  // inTimeForExam (["9", "30", "9", "50"]);
    // inTimeForExam (["9", "00", "8", "30"]);
    //inTimeForExam (["16", "00", "15", "00"]);
    //inTimeForExam (["9", "00", "10", "30"]);
    // inTimeForExam (["14", "00", "13", "55"]);
    //inTimeForExam (["11", "30", "8", "12"]);
    // inTimeForExam (["10", "00", "10", "00"]);
     //inTimeForExam (["11", "30", "10", "55"]);