function numberPyramid(arg) {
    let n = Number(arg[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (rows = 1; rows <= n; n++) {
        for (let cols = 1; cols <= rows; cols++) {
            if(current > n){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
    }
}
numberPyramid(['7']);