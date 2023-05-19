function isExcellentResult(arg) {
  let grade = Number(arg[0]);
  if (grade >= 5.5) {
    console.log("Excellent!");
  }
}
isExcellentResult(["5.5"]);
