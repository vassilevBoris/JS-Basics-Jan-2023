function newHouse(arg) {
    let flowersTyp = arg[0];
    let flowerCount = Number(arg[1]);
    let budget = Number(arg[2]);

    let totalPrice = 0;

    switch (flowersTyp) {
        case "Roses":
            totalPrice = flowerCount * 5;
            break;

        case "Dahlias":
            totalPrice = flowerCount * 3.8;
            break;

        case "Tulips":
            totalPrice = flowerCount * 2.8;
            break;

        case "Narcissus":
            totalPrice = flowerCount * 3;
            break;

        case "Gladiolus":
            totalPrice = flowerCount * 2.5;
            break;
    }

    if (flowersTyp === "Roses" && flowersTyp > 80) {
        totalPrice *= 0.9;
    } else if (flowersTyp === "Dahlias" && flowerCount > 90) {
        totalPrice *= 0.85;
    } else if (flowersTyp === "Tulips" && flowerCount > 80) {
        totalPrice *= 0.85;
    } else if (flowersTyp === "Narcissus" && flowerCount < 120) {
        totalPrice *= 1.15;
    } else if (flowersTyp === "Gladiolus" && flowerCount < 80) {
        totalPrice *= 1.20;
    }
    let diff = Math.abs(budget - totalPrice);
    if (budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${flowerCount.toFixed(0)} ${flowersTyp} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus",
"119",
"360"])

;
