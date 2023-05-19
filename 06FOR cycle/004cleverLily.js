function cleverLily(arg) {

    let age = Number(arg[0]);
    let priceWM = Number(arg[1]);
    let toysPrice = Number(arg[2]);

    let toyCount = 0;
    let money = 0;
    let currentMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCount++;
        } else {
            money += currentMoney;
            currentMoney += 10;
            money--;
        }
    }
    money += toyCount * toysPrice;
    let diff = Math.abs(money - priceWM);
    if (money >= priceWM) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10",
    "170.00",
    "6"])
    ;