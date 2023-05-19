function vacation(arg) {
    let budget = Number(arg[0]);
    let season = arg[1];
    let place = "";
    let type = "";
    let price = 0;

    if (budget <= 1000) {
        type = "Camp";
        switch (season) {
            case "Summer": price = budget * 0.65;
                place = "Alaska"; break;
            case "Winter": price = budget * 0.45;
                place = "Morocco"; break;
        }
    } else if (budget <= 3000) {
        type = "Hut";
        switch (season) {
            case "Summer": price = budget * 0.80;
                place = "Alaska"; break;
            case "Winter": price = budget * 0.60;
                place = "Morocco"; break;
        }

    } else if (budget > 3000) {
        type = "Hotel";
        switch (season) {
            case "Summer": price = budget * 0.90;
                place = "Alaska"; break;
            case "Winter": price = budget * 0.90;
                place = "Morocco"; break;
        }
    }
    console.log(`${place} - ${type} - ${price.toFixed(2)}`);




}
// vacation(["800", "Summer"]);
// vacation(["799.50", "Winter"]);
// vacation(["3460", "Summer"]);
// vacation(["1100", "Summer"]);
// vacation(["5000", "Winter"]);
// vacation(["2543.99", "Winter"]);
