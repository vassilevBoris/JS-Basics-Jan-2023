function sumSeconds (arg) {
    let time1 = Number(arg[0]);
    let time2 = Number(arg[1]);
    let time3 = Number(arg[2]);

    let totaltime = time1 + time2 + time3;
    let min = Math.floor(totaltime / 60);
    let sec = totaltime % 60;
    if(sec < 10){
        console.log(`${min}:0${sec}`);
    }else{
        console.log(`${min}:${sec}`);
    }

}
sumSeconds (["50","50","49"])

 