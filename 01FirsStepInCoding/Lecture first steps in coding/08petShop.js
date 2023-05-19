function petShop (arg) {
    let dogBox = Number(arg[0]);
    let catBox = Number(arg[1]);
    let priceCatBox = 4;
    let priceDogBox = 2.5;
    let totalSum = (dogBox * priceDogBox) + (catBox * priceCatBox);
    console.log(totalSum + " lv.");

}
petShop(["5","4"])