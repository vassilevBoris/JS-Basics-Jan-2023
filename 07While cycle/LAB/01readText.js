function readText (arg) {
    let index = 0;
    let str = arg[index];
    index++;
    while (str !== "Stop" ) {
        console.log(str);
        str = arg[index];
        index++;
    }
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"]);