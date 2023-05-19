function sumPrimeNonPrime(arg) {
    let index = 0;
    let command = arg[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "Stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            break;
        }
        let isPrime = true;
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false; 
            }
        }
        if (isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }
        command = arg[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])
