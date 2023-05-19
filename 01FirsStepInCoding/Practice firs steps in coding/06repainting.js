function repainting(input) {
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTimeInHours = Number(input[3]);
    let additionalPaint = 0.10 * paintQuantity;
    let totalPaint = paintQuantity + additionalPaint;
    let totalNylon = nylonQuantity + 2;
    let nylonPrice = totalNylon * 1.5;
    let paintPrice = totalPaint * 14.5;
    let thinnerPrice = thinnerQuantity * 5;
    let totalMaterials = nylonPrice + paintPrice + thinnerPrice +0.4;

    let workPricePerHour = 0.3 * totalMaterials;
    let totalWorkPrice = workTimeInHours * workPricePerHour;

    let totalPrice = totalWorkPrice + totalMaterials;
    console.log(totalPrice);

}
repainting(["5","10","10","1"])