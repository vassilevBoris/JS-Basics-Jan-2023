function skiTrip(arg) {
    let daysCount = Number(arg[0]);
    let roomTyp = arg[1];
    let grade = arg[2];

    let price = 0;
    let nightCount = daysCount - 1;

    switch (roomTyp) {
        case "room for one person":
            price = nightCount * 18.00;
            break;

        case "apartment":
            price = nightCount * 25.00;
            if (nightCount < 10) {
                price *= 0.70;
            } else if (nightCount <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;

        case "president apartment":
            price = nightCount * 35.00;

            if (nightCount < 10) {
                price *= 0.90;
            } else if (nightCount <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    }
    

    if (grade === "positive") {
        price *= 1.25;

    } else {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"])

