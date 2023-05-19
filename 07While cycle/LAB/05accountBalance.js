function accountBalance(arg) {
    let index = 0;
    let totalSum = 0;
    let command = arg[index];
    index++;
    while (command !== "NoMoreMoney") {
        let money = Number(command);
   
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalSum += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        command = arg[index];
        index++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
