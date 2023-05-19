function poolDay (arg){
    let peopleCount = Number(arg[0]);
    let enterancePrice = Number(arg[1]);
    let chairPrice = Number(arg[2]);
    let umbrelaPrice = Number(arg[3]);

    let taxEnterance = peopleCount * enterancePrice;
    let chairCount =Math.ceil( peopleCount * 0.75);
    let moneyChair= chairCount * chairPrice;
    let umbrelaCount = Math.ceil(peopleCount * 0.5);
    let moneyUmbrela = umbrelaCount * umbrelaPrice;
    let totalSum = taxEnterance + moneyChair + moneyUmbrela;
    console.log(`${totalSum.toFixed(2)} lv. `);
}
poolDay(["50",
"6",
"8",
"4"])



