function familyTrip(arg) {
    let buget = Number(arg[0]);
    let nights = Number(arg[1]);
    let priceForOneNight = Number(arg[2]);
    let percsentExtraExpence = Number(arg[3]);

    let priceNightTotalSum = 0;


    if (nights > 7) {
        priceNightTotalSum = (priceForOneNight * 0.95) * nights;
    } else {
        priceNightTotalSum = priceForOneNight * nights;
    }
    let extraExpence = (buget * percsentExtraExpence / 100);
    let totalMoneyLeft = priceNightTotalSum + extraExpence;

    if (totalMoneyLeft <= buget) {
        console.log(`Ivanovi will be left with ${(buget - totalMoneyLeft).toFixed(2)} leva after vacation.`);
    } else if (totalMoneyLeft > buget) {
        console.log(`${(Math.abs(buget - totalMoneyLeft).toFixed(2))} leva needed.`);
    }
}
familyTrip
    (["500",
        "7",
        "66",
        "15"])


    ;
