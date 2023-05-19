function oscarsCeremony (arg){
    let rent = Number(arg[0]);

    let status = rent * 0.7;
    let food = status * 0.85;
    let sound = food / 2;
     let total = rent + sound + status + food;

     console.log(total.toFixed(2));


}
oscarsCeremony(["5555"])