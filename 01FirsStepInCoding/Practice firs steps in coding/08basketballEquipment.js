function basketballEquipment(input) {
  let annualFee = Number(input[0]);

  let priceDiffFeeSneakers = 0.4 * annualFee;
  let sneakers = annualFee - priceDiffFeeSneakers;

  let priceDiffFeeSneakersOutfit = 0.2 * sneakers;
  let outfitPrice = sneakers - priceDiffFeeSneakersOutfit;

  let ballPrice = (1 / 4) * outfitPrice;
  let accessories = (1 / 5) * ballPrice;

  let totalPrice = annualFee + sneakers + outfitPrice + ballPrice + accessories;
  console.log(totalPrice);
}
basketballEquipment(["365"]);
