function workingHours(arg) {
    let hour = Number(arg[0]);
    let day = arg[1];

    if (hour >= 10 && hour <= 18 && day !== "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingHours (["11","Monday"]);
// workingHours (["20","Friday"]);
// workingHours(["11", "Sunday"]);
