function vowelsSum(arg){
    let string = arg[0];
    let stL = string.length;
    let sum =0;

        for(let i = 0; i < stL; i++){
            switch (string[i]) {
            case "a": sum = sum + 1; break;
            case "e": sum = sum + 2; break;
            case "i": sum = sum + 3; break;
            case "o": sum = sum + 4; break;
            case "u": sum = sum + 5; break;
        }
    }
    console.log(sum);
}
vowelsSum(["bamboo"]);