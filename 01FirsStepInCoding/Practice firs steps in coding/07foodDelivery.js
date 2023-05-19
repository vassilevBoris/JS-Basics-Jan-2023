function foodDelivery(arg) {
  let chickenMenu = Number(arg[0]);
  let fishMenu = Number(arg[1]);
  let veggieMenu = Number(arg[2]);

  let priceForChicken = 10.35 * chickenMenu;
  let priceForFish = 12.4 * fishMenu;
  let priceForVeggie = 8.15 * veggieMenu;
  let priceFood = priceForChicken + priceForFish + priceForVeggie;
  let priceDesert = priceFood * 0.2;
  let priceOrder = priceFood + priceDesert + 2.5;
    console.log(priceOrder);
}
foodDelivery(["9", "2", "6"]);
