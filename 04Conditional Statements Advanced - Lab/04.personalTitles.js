function personalTitles(arg) {
  let age = Number(arg[0]);
  let gender = arg[1];

  if (age < 16) {
    switch (gender) {
      case "f":
        console.log("Miss");
        break;
      default:
        console.log("Master");
        break;
    }
  } else if (age >= 16) {
    switch (gender) {
      case "f":
        console.log("Ms.");
        break;
      default:
        console.log("Mr.");
    }
  }
}
personalTitles(["16",
"f"]);





