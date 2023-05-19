function suppliesForSchool(arg) {
  let pencil = Number(arg[0]);
  let markers = Number(arg[1]);
  let detergent = Number(arg[2]);
  let discount = Number(arg[3]);

  let pricePencil = 5.8 * pencil;
  let priceMarkers = 7.2 * markers;
  let priceDetergent = 1.2 * detergent;
  let priceMaterials = (pricePencil + priceMarkers + priceDetergent) * 0.75;

  console.log(priceMaterials);
}
suppliesForSchool(["2 ", "3", "4", "25"]);
