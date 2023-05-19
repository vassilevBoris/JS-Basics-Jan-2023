function matchTickets(arg) {
    let budget = Number(arg[0]);
    let categoty = arg[1];
    let peopleCount = Number(arg[2]);
    let transport = 0;
    let ticketsAll = 0;

    if (peopleCount <= 4) {
        transport = budget * 0.75;
    } else if (peopleCount <= 9) {
        transport = budget * 0.60;
    } else if (peopleCount <= 24) {
        transport = budget * 0.50;
    } else if (peopleCount <= 49) {
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }

    if (categoty === "Normal") {
        ticketsAll = peopleCount * 249.99;
    } else {
        ticketsAll = peopleCount * 499.99;
    }

    let moneyLeft = budget - transport - ticketsAll;
    if (moneyLeft >= 0) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`);
    }

}
matchTickets(["50000", "Normal", "200"]);