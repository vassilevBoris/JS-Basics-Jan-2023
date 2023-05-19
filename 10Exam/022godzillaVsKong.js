function godzillaVsKong (arg) {
    let budget = Number(arg[0]);
    let kibiks = Number(arg[1]);
    let dressForOneKibik = Number(arg[2]);
    let dressForAllKibiks = 0;

    let decor = budget * 0.1;
    if(kibiks > 150){
        dressForAllKibiks = kibiks * dressForOneKibik * 0.9;
    }else{
        dressForAllKibiks = kibiks * dressForOneKibik;
    }
    let moneyExpence = decor + dressForAllKibiks;
    let moneyLeft = budget - moneyExpence;

    if(moneyExpence > budget){
        let moneyNedded = moneyExpence - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNedded.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


