function fitnessCard(params) {
    let sum = Number(params[0]);
    let sex = params[1];
    let age = Number(params[2]);
    let sport = params[3];
    let price = 0.0;
    if(sex === "m"){
        switch (sport) {
            case "Gym": price = 42; break;
            case "Boxing": price = 41; break;
            case "Yoga": price = 45; break;
            case "Zumba": price = 34; break;
            case "Dances": price = 51; break;
            case "Pilates": price = 39; break;  
        }
    } else {
        switch (sport) {
            case "Gym": price = 35; break;
            case "Boxing": price = 37; break;
            case "Yoga": price = 42; break;
            case "Zumba": price = 31; break;
            case "Dance": price = 53; break;
            case "Pilates": price = 37; break;
        }
    }
    if(age <= 19){
           price = price * 0.8 
        }
    if( sum >= price){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let money = price - sum;
        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
        }
}
fitnessCard(["50",
"m",
"23",
"Gym"])



