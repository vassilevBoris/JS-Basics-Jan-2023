function sequence2k (arg){
    let n = Number(arg[0]);
    let count = 1;
    
    while (count <= n) {
        console.log(count);
        count = count * 2 + 1;   
    }
}
sequence2k(["31"])
