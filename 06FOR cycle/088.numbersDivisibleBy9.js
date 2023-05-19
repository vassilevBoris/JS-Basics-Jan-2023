function numbersDivisibleBy9(arg) {
    let start = Number(arg[0]);
    let end = Number(arg[1]);
    let sum = 0;
    let allNumbers = '';

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            allNumbers +=`${i} `;
            
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(allNumbers);

    
}
numbersDivisibleBy9(["100", "200"]);
