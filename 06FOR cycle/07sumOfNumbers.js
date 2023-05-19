function sumOfNumbers(arg){
    let t = arg[0];
    let sum =0;

    for (let i = 0; i < t.length; i++) {
        let n = Number(t[i]);
        sum = sum + n; 
        
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"])