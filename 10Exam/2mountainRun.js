function mountainRun(arg){
    let recInSec = Number(arg[0]);
    let distanceInMeters = Number(arg[1]);
    let timeInSecForOneMElev = Number(arg[2]);

    let timeToPeak = distanceInMeters * timeInSecForOneMElev;
    let delay = Math.floor(distanceInMeters /50)* 30;

    let totalTimeToPeak = timeToPeak + delay;
    let difference = totalTimeToPeak - recInSec;
    if(recInSec > totalTimeToPeak){
        console.log(`Yes! The new record is ${totalTimeToPeak.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }
    
    

}
mountainRun(["1377","389","3"])