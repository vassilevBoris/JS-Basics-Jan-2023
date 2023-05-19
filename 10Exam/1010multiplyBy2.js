function multiplyBy2 (arg){
    let index =0;
    let currentNum = Number(arg[index]);
    index++;
    while (currentNum >= 0) {
        currentNum *= 2;
        console.log(`Result: ${currentNum.toFixed(2)}`);
        currentNum = Number(arg[index]);
        index++;
    }
    console.log("Negative number!" );
}
// multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyBy2(["-123"]);