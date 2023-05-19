function coffeeMachine(arg) {
    let drink = arg[0];
    let sugar = arg[1];
    let drinksCount = Number(arg[2]);

    let bill = 0;
    let sugarDiscount = 0.65;

    if (sugar === "Without") {
        if (drink === "Espresso") {
            if (drinksCount >= 5) {
                let couantityDiscount = 0.75;
                bill = drinksCount * 0.9 * couantityDiscount * sugarDiscount;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            } else if (drinksCount < 5) {
                bill = drinksCount * 0.9 * sugarDiscount;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            }
        } else if (drink === "Cappuccino") {
            bill = drinksCount * 1.00 * sugarDiscount;
            if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }

        } else if (drink === "Tea") {
            bill = drinksCount * 0.50 * sugarDiscount; if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }
        }

    } else if (sugar === "Normal") {
        if (drink === "Espresso") {
            if (drinksCount >= 5) {
                let couantityDiscount = 0.75;
                bill = drinksCount * 1.00 * couantityDiscount;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            } else if (drinksCount < 5) {
                bill = drinksCount * 1.00;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            }
        } else if (drink === "Cappuccino") {
            bill = drinksCount * 1.20;
            if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }

        } else if (drink === "Tea") {
            bill = drinksCount * 0.60;
            if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }
        }


    } else if (sugar === "Extra") {
        if (drink === "Espresso") {
            if (drinksCount >= 5) {
                let couantityDiscount = 0.75;
                bill = drinksCount * 1.20 * couantityDiscount;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            } else if (drinksCount < 5) {
                bill = drinksCount * 1.20;
                if (bill > 15) {
                    bill = bill * 0.8;
                } else {
                    bill
                }
            }
        } else if (drink === "Cappuccino") {
            bill = drinksCount * 1.60;
            if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }

        } else if (drink === "Tea") {
            bill = drinksCount * 0.70;
            if (bill > 15) {
                bill = bill * 0.8;
            } else {
                bill
            }
        }

    }

    console.log(`You bought ${drinksCount} cups of ${drink} for ${bill.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso",
    "Without",
    "10"]);




