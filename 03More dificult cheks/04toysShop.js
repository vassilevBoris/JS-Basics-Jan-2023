// function toyShop(input) {
//     let priceExcur = Number(input[0]);
//     let numOfToys1 = Number(input[1]);
//     let numOfToys2 = Number(input[2]);
//     let numOfToys3 = Number(input[3]);
//     let numOfToys4 = Number(input[4]);
//     let numOfToys5 = Number(input[5]);
//     let discount = 0.0;

//     let priceOfToys1 = 2.6;
//     let priceOfToys2 = 3;
//     let priceOfToys3 = 4.1;
//     let priceOfToys4 = 8.2;
//     let priceOfToys5 = 2;
//     let priceAllToys =
//         numOfToys1 * priceOfToys1 +
//         numOfToys2 * priceOfToys2 +
//         numOfToys3 * priceOfToys3 +
//         numOfToys4 * priceOfToys4 +
//         numOfToys5 * priceOfToys5;
//     let allPiece = numOfToys1 + numOfToys2 + numOfToys3 + numOfToys4 + numOfToys5;

//     if (allPiece >= 50) {
//         discount = priceAllToys * 0.25;
//     }
//     let finalPrice = priceAllToys - discount;
//     let profit = finalPrice * 0.9;

//     if (profit >= priceExcur) {
//         let totalProfit = profit - priceExcur;
//         console.log(`Yes! ${totalProfit.toFixed(2)} lv left.`);
//     } else {
//         let totalProfit = priceExcur - profit;
//         console.log(`Not enough money! ${totalProfit.toFixed(2)} lv needed.`);

//     }

// }
// toyShop(["40.8",
//     "20",
//     "25",
//     "30",
//     "50",
//     "10"])
function toyShop(input){
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let mimionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzleCount * 2.6 + 
        dollsCount * 3 + bearsCount * 4.1 +
        mimionsCount * 8.2 + trucksCount * 2;

    let toysCount = puzzleCount + dollsCount + 
        bearsCount + mimionsCount +trucksCount;

        if(toysCount >= 50){
          toysPrice = 0.75 * toysPrice;  
        }
    let moneyWon = toysPrice;
    moneyWon = 0.9 * moneyWon;

    if(moneyWon >= holidayPrice){
        let moneyLeft = moneyWon - holidayPrice;
        console.log(`Yes!${moneyLeft.toFixed(2)} lv left`);
       // console.log(`Yes!${Math.abs(moneyWon - holidayPrice)} lv left`);
    }else{
        let moneyNedded = holidayPrice - moneyWon;
        console.log(`Not enough money ${moneyNedded.toFixed(2)} lv needed.`);
        //console.log(`Not enough money ${Math.abs(moneyWon - holidayPrice)}`);    

        }
    
}
toyShop(["320","8","2","5","5","1"])
