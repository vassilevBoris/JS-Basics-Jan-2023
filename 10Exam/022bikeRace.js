function bikeRace(arg) {
    let juniors = Number(arg[0]);
    let seniors = Number(arg[1]);
    let trackType = arg[2];
    let raisedSum = 0;

    if(juniors + seniors >= 50 && trackType === "cross-country"){
        raisedSum += juniors * 6.00;
        raisedSum = raisedSum + seniors * 7.12 ;
    } else {
        switch (trackType) {
            case "trail": raisedSum += juniors * 5.50; break;
            case "cross-country": raisedSum += juniors * 8.00; break;
            case "downhill": raisedSum += juniors * 12.25; break;
            case "road": raisedSum += seniors * 20.00; break;
            default: console.log("error!");
        }
    } else if (age === "seniors") {
        switch (trackType) {
            case "trail": raisedSum += seniors * 7.00; break;
            case "cross-country": raisedSum += seniors * 9.50; break;
            case "downhill": raisedSum += seniors * 13.75; break;
            case "road": raisedSum += seniors * 21.50; break;
            default: console.log("error!");
        }

    }
    
raisedSum -= raisedSum * 0.95;
console.log(raisedSum.toFixed(2));

}
bikeRace(["10", "20", "trail"]);