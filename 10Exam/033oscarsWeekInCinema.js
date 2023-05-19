function oscarsWeekInCinema(arg) {
    let movieName = arg[0];
    let typeOfHall = arg[1];
    let ticketsCount = Number(arg[2]);

    let moneyAll = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (typeOfHall === "normal") {
                moneyAll = ticketsCount * 7.50;
            } else if (typeOfHall === "luxury") {
                moneyAll = ticketsCount * 10.50;
            } else if (typeOfHall === "ultra luxury") {
                moneyAll = ticketsCount * 13.50;
            } break;
        case "Bohemian Rhapsody":
            if (typeOfHall === "normal") {
                moneyAll = ticketsCount * 7.35;
            } else if (typeOfHall === "luxury") {
                moneyAll = ticketsCount * 9.45;
            } else if (typeOfHall === "ultra luxury") {
                moneyAll = ticketsCount * 12.75;
            } break;
        case "Green Book":
            if (typeOfHall === "normal") {
                moneyAll = ticketsCount * 8.15;
            } else if (typeOfHall === "luxury") {
                moneyAll = ticketsCount * 10.25;
            } else if (typeOfHall === "ultra luxury") {
                moneyAll = ticketsCount * 13.25;
            } break;
        case "The Favourite":
            if (typeOfHall === "normal") {
                moneyAll = ticketsCount * 8.75;
            } else if (typeOfHall === "luxury") {
                moneyAll = ticketsCount * 11.55;
            } else if (typeOfHall === "ultra luxury") {
                moneyAll = ticketsCount * 13.95;
            } break;
    }
 console.log(`${movieName} -> ${moneyAll.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["The Favourite",
"ultra luxury",
"34"])


