function depositCalculator(input) {
    let sum = Number(input[0]);
    let months = Number(input[1]);
    let persent = Number(input[2]);
    let persentDec = persent / 100;
    let final = sum + months * ((sum * persentDec) / 12);
    console.log(final);



}

depositCalculator(["200","3","5.7"]);