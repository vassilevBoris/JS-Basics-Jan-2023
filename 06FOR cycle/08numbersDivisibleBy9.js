function numbersDivisibleBy9(arg) {
    let n1 = Number(arg[0]);
    let n2 = Number(arg[1]);
    let sum = 0;
    let buffer = "";
       for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            buffer += i + "\n";  
        }
    // }
    // console.log(`The sum: ${sum}`);

    // for (let i = n1; i <= n2; i++) {
    //     if (i % 9 === 0) {
    //         console.log(i);
    //     }
     }
    console.log(`The sum: ${sum}`);
    console.log(buffer);

}
numbersDivisibleBy9(["100", "200"]);
