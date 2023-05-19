function graduation(arg) {
    let name = arg[0];
    let index = 1;
    let annAss = Number(arg[index]);
    index++;
    let avgAss = 0;
    let faild = 0;
    let flag = true;

    for (let i = 1; i <= 12; i++) {
        avgAss += annAss;
        if (annAss < 4) {
            faild += 1;
        }
        if (faild > 1) {
            console.log(`${name} has been excluded at ${i} grade"`);
            flag = false;
            break;
        }
        annAss = Number(arg[index]);
        index++;
    }
    let totalAvg = avgAss / 12;
    if(flag === true){
    console.log(`${name} graduated. Average grade: ${totalAvg.toFixed(2)}"`);
    }


}
//    graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5","6","5","6","5","6","6","2","3"]);
