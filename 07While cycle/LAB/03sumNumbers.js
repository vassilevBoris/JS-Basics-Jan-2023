function sumNumbers (arg) {
    
    let limit = Number(arg[0]);
    let index = 1;
    let sum = 0;
    
     while (sum < limit) {
        let currentNum = Number(arg[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);

}
// sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5","6"])

