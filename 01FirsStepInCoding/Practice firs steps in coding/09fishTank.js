function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentTaken = Number(input[3]) / 100;

  let volumeTotalInCm = length * width * height;
  let volumeTotalInL = volumeTotalInCm / 1000;

  let volumeTaken = percentTaken * volumeTotalInL;
  let volumeLeft = volumeTotalInL - volumeTaken;

  console.log(volumeLeft);
}
fishTank(["85", "75", "47", "17"]);
