function bikeRace(arg) {
    let juniors = Number(arg[0]);
    let seniors = Number(arg[1]);
    let trackType = arg[2];
    let raisedSum = 0;

    if (juniors + seniors >= 50 && trackType === "cross-country") {
        raisedSum += juniors * 8.00 * 0.75;
        raisedSum += seniors * 9.5 * 0.75;
    } else {
        switch (trackType) {
            case "trail": raisedSum += juniors * 5.50;
                          raisedSum += seniors * 7.00; break;
            case "cross-country": raisedSum += juniors * 8.00;
                                  raisedSum += seniors * 9.50; break;
            case "downhill": raisedSum += juniors * 12.25;
                             raisedSum += seniors * 13.75; break;
            case "road": raisedSum += juniors * 20.00;                  //60
                         raisedSum += seniors * 21.50; break;            // 860
            default: console.log("error!");
        }

    }

    raisedSum = raisedSum * 0.95;
    console.log(raisedSum.toFixed(2));

}
// bikeRace(["10", "20", "trail"]);
    // bikeRace(["21", "26", "cross-country"]);
    // bikeRace(["30", "25", " -country"]);
    // bikeRace(["10", "10", "downhill"]);
    bikeRace(["3", "40", "road"]);
