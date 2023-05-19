function fruitShop(arg) {
    let fruit = arg[0];
    let dayOfTheWeek = arg[1];
    let quantity = Number(arg[2]);

    let price = 0;

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" ||
    dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday"){
        switch (fruit) {
            case "banana": price = 2.5 * quantity; break;
            case "apple": price = 1.20 * quantity; break;
            case "orange": price = 0.85 * quantity; break;
            case "grapefruit": price = 1.45 * quantity; break;
            case "kiwi": price = 2.70 * quantity; break;
            case "pineapple": price = 5.50 * quantity; break;
            case "grapes": price = 3.85 * quantity;  break;
            default: console.log("error"); break;
        }
    } else if (dayOfTheWeek === "Sunday" || dayOfTheWeek === "Saturday") {
            switch (fruit) {
                case "banana": price = 2.7 * quantity; break;
                case "apple": price = 1.25 * quantity; break;
                case "orange": price = 0.9 * quantity; break;
                case "grapefruit": price = 1.6 * quantity; break;
                case "kiwi": price = 3.00 * quantity; break;
                case "pineapple": price = 5.60 * quantity; break;
                case "grapes": price = 4.20 * quantity; break;
                default: console.log("error"); break;
        }
    } else {
        console.log("error")
    }
        
    if(price !== 0){
        console.log(price.toFixed(2));
    } 
   
        
}
fruitShop(["apple",
"Tuesday",
"2"])


