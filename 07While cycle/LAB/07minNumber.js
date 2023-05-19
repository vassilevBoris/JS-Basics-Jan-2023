function minNumber(arg) {
    let index = 0;
    let command = arg[index];
    index++;
    let myMinNumber = Number.MAX_SAFE_INTEGER;
    while (command !== "Stop") {
        let num = Number(command);
        if(myMinNumber > num){
            myMinNumber= num;
        }
        command = arg[index];
        index++;

    }
    console.log(myMinNumber);
}

// minNumber(["100", "99", "80", "70", "Stop"]);
// minNumber(["-10","20","-30","Stop"]);
// minNumber(["45","-20","7","99","Stop"]);
// minNumber(["999","Stop"]);
minNumber(["-1","-2","Stop"]);
