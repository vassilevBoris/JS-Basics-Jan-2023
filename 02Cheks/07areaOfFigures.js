function areaOfFigure(arg) {
  let typ = arg[0];
  let a = Number(arg[1]);
  let b = Number(arg[2]);

  if (typ === "square") {
    let areaSquare = (a * a).toFixed(3);
    console.log(areaSquare);
  }
  if (typ === "rectangle") {
    let areaRectangle = (a * b).toFixed(3);
    console.log(areaRectangle); 
  }
  if (typ === "circle") {
    let areaCircle = (Math.PI * a * a).toFixed(3);
    console.log(areaCircle);
  }
  if (typ === "triangle") {
    let areaTriangle = ((a * b) / 2).toFixed(3);
    console.log(areaTriangle);
  }
}
areaOfFigure(["triangle", "4.5", "20"]);
