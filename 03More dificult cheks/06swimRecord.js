function swimRecord(arg) {
    let recordTime =Number(arg[0]);
    let distace = Number(arg[1]);
    let timePerMeter = Number(arg[2]);

    let swimmingTime = distace * timePerMeter;
    let delaysCount = Math.floor(distace / 15);
    let delayTime = delaysCount * 12.5;
    let totalTime = swimmingTime + delayTime;
    if( totalTime < recordTime){
        console.log(`Tes, he succeeded! The world record is ${totalTime.toFixed(2)} seconds`);
    } else {
        let missingSeconds = totalTime - recordTime;
        console.log(`No, he faild! He was ${missingSeconds.toFixed(2)} second slower.`);
    }



}
swimRecord(["10464","1500","20"]);