function maxNumber(arg) {
    let index = 0;
    let command = arg[index];
    index++;
    let myMAxNumber = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let num = Number(command);

        if (myMAxNumber < num) {
            myMAxNumber = num;
        }
        command = arg[index];
        index++;
    }
    console.log(myMAxNumber);

}
// maxNumber(["100","99","80","70","Stop"]);
// maxNumber(["-10","20","-30","Stop"]);
// maxNumber(["45","-20","7","99","Stop"]);


