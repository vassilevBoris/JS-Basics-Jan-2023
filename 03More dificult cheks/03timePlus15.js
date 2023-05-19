 function timePlus15 (arg){
    let hour = Number(arg[0]);
    let min = Number(arg[1]);

    let totalMin = hour * 60 + min + 15;
    let  finalHour = Math.floor(totalMin / 60);
    let finalMin = totalMin % 60;
    
    if(finalHour === 24){
        finalHour = 0;
    }
        if(finalMin < 10){
            console.log(`${finalHour}:0${finalMin}`);
        }else{
            console.log(`${finalHour}:${finalMin}`);
            } 
 }
 timePlus15(["23","46"]);