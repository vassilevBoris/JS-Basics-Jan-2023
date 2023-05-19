function journey(arg) {
    let budget = Number(arg[0]);
    let season = arg[1];

    let destenation = "";
    let placeType = "";
    let price = 0;

    if (season === "summer") {
        placeType = "Camp";
    } else {
        placeType = "Hotel";
    }

    if (budget <= 100) {
        destenation = "Bulgaria"

        if (season === "summer") {
            price = 0.3 * budget;
        } else {
            price = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destenation = "Balkans"

        if (season === "summer") {
            price = 0.4 * budget;
        } else {
            price = 0.8 * budget;
        }
    } else {
        destenation = "Europe"

        price = 0.9 * budget;
        placeType = "Hotel";
    }





    console.log(`Somewhere in ${destenation}`);
    console.log(`${placeType} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"]);