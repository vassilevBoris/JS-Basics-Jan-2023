function truckDriver (arg){
    let season = arg[0];
    let kmForMonth = Number(arg[1]);
    let moneyForMonth = 0;
    
    

    if( kmForMonth <= 5000){
        switch(season){
            case "Spring":
            case "Autumn": moneyForMonth = kmForMonth * 0.75; break;
            case "Summer": moneyForMonth = kmForMonth * 0.90; break;
            case "Winter": moneyForMonth = kmForMonth * 1.05; break;
        }
    } else if (kmForMonth <= 10000){
        switch(season){
            case "Spring":
            case "Autumn": moneyForMonth = kmForMonth * 0.95; break;
            case "Summer": moneyForMonth = kmForMonth * 1.10; break;
            case "Winter": moneyForMonth = kmForMonth * 1.25; break;
        }
    }else if (kmForMonth <= 20000){
        moneyForMonth = kmForMonth * 1.45;
    }
    let moneyForSeason = moneyForMonth * 4;
    let moneyAfterTax = moneyForSeason * 0.90;
    console.log(`${moneyAfterTax.toFixed(2)}`);
}
truckDriver(["Summer", "3455"]);
// truckDriver(["Winter", "4350"]);
// truckDriver(["Spring", "1600"]);
// truckDriver(["Winter", "5678"]);
// truckDriver(["Autumn", "8600"]);
// truckDriver(["Winter", "16042"]);
// truckDriver(["Spring", "16942"]);