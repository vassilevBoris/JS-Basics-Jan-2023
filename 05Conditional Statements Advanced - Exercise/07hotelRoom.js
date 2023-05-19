function hotelRooms(arg) {

    let month = arg[0];
    let nights = Number(arg[1]);
    let priceStudio = 0;
    let priceApart = 0;


    switch (month) {
        case "May":
        case "October":
            priceStudio = 50 * nights;
            priceApart = 65 * nights; break;
        case "June":
        case "September":
            priceStudio = 75.2 * nights;
            priceApart = 68.7 * nights; break;
        case "July":
        case "August":
            priceStudio = 76 * nights;
            priceApart = 77 * nights; break;
    }
    if (month === "May" || month === "October") {
        if (nights > 7 && nights <= 14) {
            priceStudio *= 0.95;
        } else if (nights > 14) {
            priceStudio *= 0.7;
        }
    }
    if (month === "June" || month === "September") {
        if (nights > 14) {
            priceStudio *= 0.8;
        }
    } 
    if(nights > 14){
        priceApart *= 0.9;
    }
console.log(`Apartment: ${priceApart.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRooms(["August",
"20"])


