function oscars(arg) {

    let index = 0;
    let name = arg[index];
    index++;
    let points = Number(arg[index]);
    index++;
    let count = Number(arg[index]);
    index++;
    let isNominee = false;

    for (let i = 0; i < count; i++) {
        let currentName = arg[index];
        index++;
        let tempPoints = Number(arg[index]);
        index++;


        let res = (currentName.length * tempPoints) / 2;
        points += res;

        if (points > 1250.5) {
            isNominee = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (!isNominee) {
        let diff = Math.abs(points - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }


}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])

    ;