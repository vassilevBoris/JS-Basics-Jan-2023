function boosters(arg) {
  let fruits = arg[0];
  let size = arg[1];
  let setPieces = Number(arg[2]);

  let smallWatermelon = 2 * 56;
  let bigWatermelon = 5 * 28.7;
  let smallMango = 2 * 36.66;
  let bigMango = 5 * 19.6;
  let smallPineapple = 2 * 42.1;
  let bigPineapple = 5 * 24.8;
  let smallRaspberry = 2 * 20;
  let bigRaspberry = 5 * 15.2;
  let sum = 0;
  if (fruits == "Watermelon") {
    if (size == "small") {
      sum = smallWatermelon * setPieces;
    } else {
      sum = bigWatermelon * setPieces;
    }
  }
  if (fruits == "Mango") {
    if (size == "small") {
      sum = smallMango * setPieces;
    } else {
      sum = bigMango * setPieces;
    }
  }
  if (fruits == "Pineapple") {
    if (size == "small") {
      sum = smallPineapple * setPieces;
    } else {
      sum = bigPineapple * setPieces;
    }
  }
  if (fruits == "Raspberry") {
    if (size == "small") {
      sum = smallRaspberry * setPieces;
    } else {
      sum = bigRaspberry * setPieces;
    }
  }

  if (sum > 400) {
    if (sum <= 1000) {
      sum = sum - sum * 0.15;
    } else {
      sum = sum - sum * 0.5;
    }
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
boosters(["Watermelon",
"big",
"4"])


