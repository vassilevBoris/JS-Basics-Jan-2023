function travelAgency(arg) {
    let cityName = arg[0];
    let packgeType = arg[1];
    let vipDiscount = arg[2];
    let daysStay = Number(arg[3]);

    let finalPrice = 0;
    let pricePerDay = 0;

    switch (cityName) {
        case "Bansko":
        case "Borovets":
            if (packgeType === "withEquipment") {
                if (vipDiscount === "yes") {
                    pricePerDay = 100 * 0.9;
                } else {
                    pricePerDay = 100;
                }

            } else if (packgeType === "noEquipment") {
                if (vipDiscount === "yes") {
                    pricePerDay = 80 * 0.95;
                } else {
                    pricePerDay = 80;
                }

            } else {
                console.log("Invalid input!");
            } break;

        case "Varna":
        case "Burgas":
            if (packgeType === "withBreakfast") {
                if (vipDiscount === "yes") {
                    pricePerDay = 130 * 0.88;
                } else {
                    pricePerDay = 130;
                }
            } else if (packgeType === "noBreakfast") {
                if (vipDiscount === "yes") {
                    pricePerDay = 100 * 0.93;
                } else {
                    pricePerDay = 100;
                }
            } else
                console.log("Invalid input!"); break;

        default:
            console.log("Invalid input!"); break;
    }

    if (daysStay < 1) {
        console.log("Days must be positive number!");
    } else if (daysStay > 7) {
        daysStay = +1;
    }

    finalPrice = pricePerDay * daysStay;
    if (finalPrice !== 0) {
        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}

// travelAgency(["Borovets", "noEquipment", "yes", "6"]);
// travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
    // travelAgency(["Burgas", "noBreakfast", "no", "4"]);
    // travelAgency(["Varna", "withBreakfast", "no", "0"]);
    // travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);





