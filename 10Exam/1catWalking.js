function cat(params) {
    let minWalkperDay = Number(params[0]);
    let walksPerDay = Number(params[1]);
    let totMinWalks = minWalkperDay * walksPerDay;
    let eatenCaloriesPerDay = Number(params[2]);
    let totalBurnsCalories = totMinWalks *5;
    let halfEatenCalories = eatenCaloriesPerDay / 2;
    
    if( totalBurnsCalories >= halfEatenCalories ){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnsCalories}.`);
    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnsCalories}.`);
    }
}
cat(["Pineapple",
"small",
"1"])
