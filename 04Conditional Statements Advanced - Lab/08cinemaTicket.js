function cinemaTicket(arg) {
    let dayOfTheWeek = arg[0];

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Friday") {
        console.log(12);
    } else if (dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday") {
        console.log(14);
    } else {
        console.log(16);
    }
}
cinemaTicket(["Sunday"])