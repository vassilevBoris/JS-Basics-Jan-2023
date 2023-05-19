function lunchBrake(arg){
    let movieName = arg[0];
    let epizodeDuration = Number(arg[1]);
    let breakeDuration = Number(arg[2]);

    let lunchTime = (1 / 8) * breakeDuration;
    let restTime = (1 / 4) * breakeDuration;
    let totOccupiedTime = lunchTime + restTime;
    let movieTime = breakeDuration - totOccupiedTime;

    if(movieTime >= epizodeDuration){
        let timeLeft = Math.ceil(movieTime - epizodeDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time`);

    } else {
        let timeNeeded = Math.ceil(epizodeDuration - movieTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes`);
    }
}
lunchBrake(["Teen Wolf","48","60"]);