function password (arg){
    let user = arg[0];
    let pass = arg[1];
    let data = arg[2];
    let index = 3;
    
    while (data !== pass) {
        data = arg[index];
        index++;    
    }
    console.log(`Welcome ${user}!`);
}
password(["Gosho",
"secret",
"secret"])
;
