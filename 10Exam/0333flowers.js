function flowers (arg) {
    let hrizantemi = Number(arg[0]);
    let rozi = Number(arg[1]);
    let laleta = Number(arg[2]);
    let sezon = arg[3];
    let praznik = arg[4];
    let buket = 0;

    switch (sezon) {
        case "Spring":
        case "Summer": buket += hrizantemi * 2.00 + rozi * 4.10 + laleta * 2.50; break;
        case "Autumn":
        case "Winter": buket += hrizantemi * 3.75 + rozi * 4.50 + laleta * 4.15; break;       
    }
    if(praznik === "Y"){
        buket = buket * 1.15;
    }
    if(laleta > 7 && sezon === "Spring"){
        buket = buket* 0.95;
    }
    if(rozi >= 10 && sezon === "Winter"){
        buket = buket * 0.9;
    }
    if(hrizantemi + rozi +laleta > 20){
        buket = buket * 0.8;
    }
    buket = buket + 2;

    console.log(buket.toFixed(2));

}
// flowers(["2", "4", "8", "Spring", "Y"]);
// flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
