function tennisRanklist(arg) {
    let index = 0;
    let n = Number(arg[index]);
    index++;
    let startPoints = Number(arg[index]);
    index++;
    let tempPoints = 0;
    let winnCount = 0;

    for (let i = 0; i < n; i++) {
        let res = arg[index];
        index++;

        if (res === "W") {
            winnCount++;
            tempPoints += 2000;
        } else if (res === "F") {
            tempPoints += 1200;
        } else {
            tempPoints += 720;
        }
    }
    let finalPoints = startPoints + tempPoints;
    let avrPoints = Math.floor(tempPoints / n);
    let winP = winnCount / n * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avrPoints}`);
    console.log(`${winP.toFixed(2)}%`);
}
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

    ;