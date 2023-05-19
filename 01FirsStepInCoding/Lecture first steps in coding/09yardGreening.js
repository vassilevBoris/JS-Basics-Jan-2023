function yardGreening (arg) {
    let area = Number(arg[0]);
    let priceForOneM2 = 7.61;

    let totalPrice = area * priceForOneM2;
    let discount = totalPrice * 0.18;
    let pricewithdiscount = totalPrice - discount;
     console.log(`"The final price is: ${pricewithdiscount} lv.`);
     console.log(`"The discount is: ${discount} lv.`);
   
}
yardGreening(["150"]);