function equalSumsEvenOddPosition(arg) {
  let startNum = Number(arg[0]);
  let endNum = Number(arg[1]);
  let result = "";

  for (let currNum = startNum; currNum <= endNum; currNum++) {
    let oddSum = 0;
    let evenSum = 0;

    let currNumAsStr = currNum.toString();

    for (let index = 0; index < currNumAsStr.length; index++) {
      let curDigit = Number(currNumAsStr[index]);

      let position = index + 1;

      if (position % 2 === 0) {
        evenSum += curDigit;
      } else {
        oddSum += curDigit;
      }
    }
    if (oddSum === evenSum) {
      result += currNumAsStr + " ";
    }
  }

  console.log(result);
}
equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456","124000"]) 
