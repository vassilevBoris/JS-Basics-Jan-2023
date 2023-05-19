function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = pages / pagesPerHour;
    let hourPerDays = totalHours / days;

    console.log(hourPerDays);

}
vacationBooksList(["212","20","2"]);