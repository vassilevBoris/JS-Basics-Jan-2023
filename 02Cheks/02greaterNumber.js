function greaterNumber(arg) {
    let num1 = Number(arg[0]);
    let num2 = Number(arg[1]);
    if(num1 > num2) {
        console.log(num1);

    } else {
        console.log(num2);
    }
}
greaterNumber(["10" , "10"]);