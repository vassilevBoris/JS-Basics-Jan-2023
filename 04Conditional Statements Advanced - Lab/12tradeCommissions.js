function tradeCommissions(arg) {
    let city = arg[0];
    let quantity = Number(arg[1]);
    let finalResult = 0;

    if (city === 'Sofia') {
        if (quantity >= 0 && quantity <= 500) {
            finalResult = quantity * 0.05;
        } else if (quantity > 500 && quantity <= 1000) {
            finalResult = quantity * 0.07;
        } else if (quantity > 1000 && quantity <= 10000) {
            finalResult = quantity * 0.08;
        } else if (quantity > 10000) {
            finalResult = quantity * 0.12;
        } else {
            console.log("error");
        }
    } else if (city === 'Varna') {
        if (quantity >= 0 && quantity <= 500) {
            finalResult = quantity * 0.045;
        } else if (quantity > 500 && quantity <= 1000) {
            finalResult = quantity * 0.075;
        } else if (quantity > 1000 && quantity <= 10000) {
            finalResult = quantity * 0.1;
        } else if (quantity > 10000) {
            finalResult = quantity * 0.13;
        } else {
            console.log("error");
        }
    } else if (city === 'Plovdiv') {
        if (quantity >= 0 && quantity <= 500) {
            finalResult = quantity * 0.055;
        } else if (quantity > 500 && quantity <= 1000) {
            finalResult = quantity * 0.08;
        } else if (quantity > 1000 && quantity <= 10000) {
            finalResult = quantity * 0.12;
        } else if (quantity > 10000) {
            finalResult = quantity * 0.145;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
    if(finalResult !==0){
    console.log(finalResult.toFixed(2));
}

}

tradeCommissions(["Plovdiv",
"8543.86"])



