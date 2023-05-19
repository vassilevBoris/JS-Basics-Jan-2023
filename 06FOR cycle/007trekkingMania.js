function trekkingMania(arg) {
    let index = 0;
    let groupNum = Number(arg[index]);
    index++;
    let musala = 0;
    let mountblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    // let allClimbers = totalClimbers + grupSize;

    for (let i = 0; i < groupNum; i++) {
        let groupSize = Number(arg[index]);
        index++;
        if (groupSize <= 5) {
            musala = musala + groupSize;
        } else if (groupSize <= 12) {
            mountblanc = mountblanc + groupSize;
        } else if (groupSize <= 25) {
            kilimanjaro = kilimanjaro + groupSize;
        } else if (groupSize <= 40) {
            k2 = k2 + groupSize;
        } else {
            everest = everest + groupSize;
        }
    }
    let allClimbers = musala + mountblanc + kilimanjaro + k2 + everest;
    let toMusala = musala / allClimbers * 100;
    let toMountblanc = mountblanc / allClimbers * 100;
    let toKilimanjaro = kilimanjaro / allClimbers * 100;
    let toK2 = k2 / allClimbers * 100;
    let toEverest = everest / allClimbers * 100;
    console.log(`${toMusala.toFixed(2)}%`);
    console.log(`${toMountblanc.toFixed(2)}%`);
    console.log(`${toKilimanjaro.toFixed(2)}%`);
    console.log(`${toK2.toFixed(2)}%`);
    console.log(`${toEverest.toFixed(2)}%`);



}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
    ;